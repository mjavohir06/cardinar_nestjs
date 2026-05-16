import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from "@nestjs/common";

import { ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserPublicService } from "../../services/user/user.public.service";
import { UserCreateDto } from "../../dtos/user/public/user.create.dto";
import { UserEntity } from "../../entities/user.entity";
import { UserPublicListDto } from "../../dtos/user/public/user.list.dto";
import type { Request, Response } from "express";
import { UserSingInDto } from "../../dtos/user/public/user.singin.dto";
import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { UserPublicOwnDto } from "../../dtos/user/public/user.own.dto";
import { plainToInstance } from "class-transformer";



@ApiTags('User - Public')
@Controller('public/user')
export default class UserPublicController {
    constructor(
        private readonly service: UserPublicService
    ) { }

    private cookieSet(res: Response, token: string) {
        const cook = res.cookie("accessToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24,
        })

        return cook
    }

    @Post("singup")
    async singup(@Body() payload: UserCreateDto) {
        return await this.service.singup(payload as UserEntity)
    }

    @Post("singin")
    async singin(@Res({ passthrough: true }) res: Response, @Body() payload: UserSingInDto) {
        const result = await this.service.singin(payload as UserEntity)
        this.cookieSet(res, result.accessToken)
        return result
    }


    @Post("checkCode")
    async checkCode(@Res({ passthrough: true }) res: Response, @Body() payload: { id: number, code: string }) {
        const result=await this.service.checkCode(payload)
        this.cookieSet(res, result.accessToken)
        return result
    }



    @Get()
    @Roles(Role.Admin,Role.SuperAdmin,Role.User)
    @ApiOkResponse({ type: UserPublicOwnDto})
    @ApiCookieAuth()
    async getAll(@Req() req:Request) {
        const user=req.user
        if(!user) throw new UnauthorizedException("siz hali ro'yhatdan o'tmagansiz!")
        return plainToInstance(UserPublicOwnDto, user, { excludeExtraneousValues: true })
    }

}