import { Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { MaterialEntity } from "../../entities/material.entity";
import { MaterialRepository } from "../../repositories/material.repo";







@Injectable()
export class MaterialAdminService extends ServiceHelper<MaterialEntity> {

    constructor(
        protected readonly repo:MaterialRepository
    ){
        super()
    }
    

    

}