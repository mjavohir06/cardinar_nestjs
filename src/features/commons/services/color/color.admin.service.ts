import { Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { ColorEntity } from "../../entities/color.entity";
import { ColorRepository } from "../../repositories/color.repo";






@Injectable()
export class ColorAdminService extends ServiceHelper<ColorEntity> {

    constructor(
        protected readonly repo:ColorRepository
    ){
        super()
    }
    

    

}