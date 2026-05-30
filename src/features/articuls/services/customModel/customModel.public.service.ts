import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CustomModelEntity } from "../../entities/customModel.entity";
import { CustomModelRepository } from "../../repository/customModel.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class CustomModelPublicService extends ServiceHelper<CustomModelEntity> {

    constructor(
        protected readonly repo:CustomModelRepository
    ){
        super()
    }

}