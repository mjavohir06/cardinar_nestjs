import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { ProductEntity } from "../entities/product.entity";
import { CategoryEntity } from "@/features/commons/entities/category.entity";


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

    async categoryFindOneBy(id:number){
        return await this.category.findOneBy({id})
    }

}