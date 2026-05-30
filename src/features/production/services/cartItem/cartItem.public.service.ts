import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CartItemEntity } from "../../entities/cartItem.entity";
import { cartItemRepository } from "../../repositories/cartItem.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class CartItemPublicService extends ServiceHelper<CartItemEntity> {

    constructor(
        protected readonly repo:cartItemRepository
    ){
        super()
    }

}