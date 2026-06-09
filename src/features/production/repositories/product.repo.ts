import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { ProductEntity } from "../entities/product.entity";
import { CategoryEntity } from "@/features/commons/entities/category.entity";
import { ProductFilters } from "@/core/filters/product.filter";


@Injectable()

export class ProductRepository extends BaseRepository<ProductEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(ProductEntity)
        protected readonly repo: Repository<ProductEntity>,
        @InjectRepository(CategoryEntity)
        protected readonly category: Repository<CategoryEntity>,
    ) {
        super()
    }

    async categoryFindOneBy(id: number) {
        return await this.category.findOneBy({ id })
    }

    // repository da
    async getByCategory(filter: ProductFilters) {
        const take = filter.size
        const skip = (filter.page - 1) * take

        const qb = this.repo.createQueryBuilder('product')
            .leftJoinAndSelect('product.images', 'images')
            .leftJoinAndSelect('product.productColors', 'colors')  // ✅ ManyToMany ishlaydi
            

        if(filter.categoryId) qb.where('product.categoryId = :categoryId', { categoryId:filter.categoryId })
        if (filter.colorId) {
            qb.andWhere('colors.id = :colorId', { colorId: filter.colorId })
        }

        const totalCount = await qb.getCount()
        const data = await qb.skip(skip).take(take).getMany()
        const totalPages = Math.ceil(totalCount / take)
        const nextPage = filter.page < totalPages ? filter.page + 1 : null

        return { totalPages, totalCount, currentPage: filter.page, nextPage, data }
    }

}