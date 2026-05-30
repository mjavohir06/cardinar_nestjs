import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CartItemEntity } from "../../entities/cartItem.entity";
import { cartItemRepository } from "../../repositories/cartItem.repo";
import { CartItemUpdateDto } from "../../dtos/cartItem/admin/cartItem.update.dto";
import { CartItemCreateDto } from "../../dtos/cartItem/admin/cartItem.create.dto";

const message404 = "Bunday idli branch topilmadi!"



@Injectable()
export class CartItemAdminService extends ServiceHelper<CartItemEntity> {

    constructor(
        protected readonly repo: cartItemRepository
    ) {
        super()
    }

    private async tekshir(payload: CartItemUpdateDto) {
        if (payload.articulId) {
            const ent = await this.repo.articulFindOneBy(payload.articulId)
            if (!ent) throw new BadRequestException("Articul id noto'g'ri!")
        }
        if (payload.productId) {
            const ent = await this.repo.articulFindOneBy(payload.productId)
            if (!ent) throw new BadRequestException("Product id noto'g'ri!")
        }
    }

    async create(payload:CartItemCreateDto){
        await this.tekshir(payload)
        return await this.repo.save(payload as CartItemEntity)
    }

    async update(id:number,payload:CartItemUpdateDto){
        await this.tekshir(payload)
        const ent=await this.repo.findOneBy({id})
        if(!ent) throw new NotFoundException("Bunday idli cartItem topilmadi!")
        
        const newEnt=this.update_merge(ent,payload)
        return await this.repo.save(newEnt)
    }

}