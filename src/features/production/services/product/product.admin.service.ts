import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product.repo";
import { ProductUpdateDto } from "../../dtos/product/admin/product.update.dto";
import { ProductCreateDto } from "../../dtos/product/admin/product.create.dto";

const message404="Bunday idli branch topilmadi!"



@Injectable()
export class ProductAdminService extends ServiceHelper<ProductEntity> {

    constructor(
        protected readonly repo:ProductRepository
    ){
        super()
    }

    private async tekshir(payload:ProductUpdateDto){
        if(payload.categoryId){
            const ent=await this.repo.categoryFindOneBy(payload.categoryId)
            if(!ent) throw new BadRequestException("Kategory id noto'g'ri!")
        }
    }

    async create(payload:ProductCreateDto){
        await this.tekshir(payload)
        return await this.baseCreate(payload as ProductEntity)
    }

    async update(id:number,payload:ProductUpdateDto){
        await this.tekshir(payload)
        const ent=await this.repo.findOneBy({id})
        if(!ent) throw new NotFoundException("Bunday idli product topilmadi!")
        
        const newEnt=this.update_merge(ent,payload)
        return await this.repo.save(newEnt)
    }


}