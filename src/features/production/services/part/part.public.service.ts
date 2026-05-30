import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { PartEntity } from "../../entities/part.entity";
import { PartRepository } from "../../repositories/part.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class PartPublicService extends ServiceHelper<PartEntity> {

    constructor(
        protected readonly repo:PartRepository
    ){
        super()
    }

}