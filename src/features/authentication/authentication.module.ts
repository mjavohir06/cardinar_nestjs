import { Module } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { RequestRepository } from "./repositories/request.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { OtpCodeEntity } from "./entities/otpCode.entity";
import { RequestEntity } from "./entities/request.entity";
import { UserAdminService } from "./services/user/user.admin.service";
import { UserPublicService } from "./services/user/user.public.service";
import { RequestAdminService } from "./services/request/request.admin.service";
import { RequestPublicService } from "./services/request/request.public.service";
import { UserAdminController } from "./controller/user/user.admin.controller";
import UserPublicController from "./controller/user/user.public.controller";
import RequestPublicController from "./controller/request/request.public.controller";


@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity,OtpCodeEntity,RequestEntity])
    ],
    controllers:[
        UserAdminController,
        UserPublicController,
        RequestPublicController,
    ],
    providers:[
        UserAdminService,
        UserPublicService,
        RequestAdminService,
        RequestPublicService,

        //repositories
        UserRepository,
        RequestRepository,
    ]
})

export default class AuthenticationModule{}