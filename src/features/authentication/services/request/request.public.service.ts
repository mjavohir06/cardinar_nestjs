import { Injectable } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { RequestRepository } from "../../repositories/request.repository";
import { RequestEntity } from "../../entities/request.entity";
import { Request } from "express";
import { RequestCreateDto } from "../../dtos/request/public/request.create.dto";


const message404="Bunday idli request topilmadi!"


@Injectable()
export class RequestPublicService extends ServiceHelper<RequestEntity> {

    constructor(
        protected readonly repo:RequestRepository
    ){
        super()
    }

    async create(req:Request,payload:RequestCreateDto){
        const user=await this.user(req)

        try{
            const request=await this.repo.save({userId:user.id,...payload} as RequestEntity)
        }
        catch(err){
            return err
        }
    }

}