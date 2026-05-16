import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";
import { RequestRepository } from "../../repositories/request.repository";
import { RequestEntity } from "../../entities/request.entity";


const message404="Bunday idli request topilmadi!"


@Injectable()
export class RequestAdminService extends ServiceHelper<RequestEntity> {

    constructor(
        protected readonly repo:RequestRepository
    ){
        super()
    }

}