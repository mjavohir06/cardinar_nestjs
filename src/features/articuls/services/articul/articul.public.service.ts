import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { ArticulEntity } from "../../entities/articul.entity";
import { ArticulRepository } from "../../repository/articul.repo";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class ArticulPublicService extends ServiceHelper<ArticulEntity> {

    constructor(
        protected readonly repo:ArticulRepository
    ){
        super()
    }

}