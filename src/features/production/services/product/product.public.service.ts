import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../../repositories/product.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class ProductPublicService extends ServiceHelper<ProductEntity> {

    constructor(
        protected readonly repo:ProductRepository
    ){
        super()
    }

}