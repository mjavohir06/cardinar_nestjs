import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CarModelEntity } from "../../entities/carModel.entity";
import { CarModelRepository } from "../../repository/carModel.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class CarModelPublicService extends ServiceHelper<CarModelEntity> {

    constructor(
        protected readonly repo:CarModelRepository
    ){
        super()
    }

}