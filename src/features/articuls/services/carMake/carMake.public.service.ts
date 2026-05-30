import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { CarMakeEntity } from "../../entities/carMake.entity";
import { CarMakeRepository } from "../../repository/carMake.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class CarMakePublicService extends ServiceHelper<CarMakeEntity> {

    constructor(
        protected readonly repo:CarMakeRepository
    ){
        super()
    }

}