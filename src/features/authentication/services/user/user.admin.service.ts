import { Injectable, NotFoundException } from "@nestjs/common";

import ServiceHelper from "@/core/services/service.helper";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";


const message404="Bunday idli user topilmadi!"


@Injectable()
export class UserAdminService extends ServiceHelper<UserEntity> {

    constructor(
        protected readonly repo:UserRepository
    ){
        super()
    }

}