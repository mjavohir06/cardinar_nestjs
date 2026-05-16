import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from "@nestjs/common";

import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { RequestPublicService } from "../../services/request/request.public.service";
import { RequestCreateDto } from "../../dtos/request/public/request.create.dto";
import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import type{ Request } from "express";



@ApiTags('Request - Public')
@Controller('public/request')
export default class RequestPublicController {
    constructor(
        private readonly service: RequestPublicService
    ) { }

    @Post()
    @Roles(Role.Admin,Role.SuperAdmin,Role.User)
    async create(@Req() req:Request,@Body() payload:RequestCreateDto){
        return await this.service.create(req,payload)
    }
}