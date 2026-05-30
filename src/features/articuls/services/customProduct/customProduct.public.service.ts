import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CustomProductEntity } from "../../entities/customProduct.entity";
import { CustomProductRepository } from "../../repository/customProduct.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class CustomProductPublicService extends ServiceHelper<CustomProductEntity> {

    constructor(
        protected readonly repo:CustomProductRepository
    ){
        super()
    }

}