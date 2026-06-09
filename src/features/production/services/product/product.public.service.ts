import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product.repo";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import { plainToInstance } from "class-transformer";
import { ProductPublicPremiumDto } from "../../dtos/product/public/product.premium.dto";
import { ProductPublicTovarDto } from "../../dtos/product/public/product.tovar.dto";
import { ProductDetailDto } from "../../dtos/product/public/product.detail.dto";
import { ProductFilters } from "@/core/filters/product.filter";


const message404 = "Bunday idli branch topilmadi!"


@Injectable()
export class ProductPublicService extends ServiceHelper<ProductEntity> {

    constructor(
        protected readonly repo: ProductRepository
    ) {
        super()
    }

    private takeImage(data:ProductEntity[]){
        return data.map((e) => ({
            ...e,
            image: e.images?.[0]?.image ?? null,
        })) as []
    }

    async getOne(id:number){
        const res=await this.repo.findOne({where:{id},relations:{images:true}})
        if(!res) throw new BadRequestException("Bunday idli product yo'q!")
        return plainToInstance(ProductDetailDto,res,{excludeExtraneousValues:true})
    }

    async getPremium(filter: PaginationFilters) {
        const prem = await this.repo.getAll(filter, { isPremium: true }, { images: true })
        prem.data = this.takeImage(prem.data)
        prem.data = plainToInstance(ProductPublicPremiumDto, prem.data, { excludeExtraneousValues: true }) as []

        return prem

    }
    async getTovarsId(filter:ProductFilters){
        const prem = await this.repo.getByCategory(filter)
        prem.data=this.takeImage(prem.data)
        prem.data = plainToInstance(ProductPublicTovarDto, prem.data, { excludeExtraneousValues: true }) as []

        return prem
    }

    async getTovars(filter:PaginationFilters){
        const prem = await this.repo.getAll(filter,{},{images:true})
        prem.data=this.takeImage(prem.data)
        prem.data = plainToInstance(ProductPublicTovarDto, prem.data, { excludeExtraneousValues: true }) as []

        return prem
    }

}