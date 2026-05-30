import { Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { ImageEntity } from "../../entities/image.entity";
import { ImageRepository } from "../../repositories/image.repo";







@Injectable()
export class ImagePublicService extends ServiceHelper<ImageEntity> {

    constructor(
        protected readonly repo:ImageRepository
    ){
        super()
    }
    

    

}