import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { UserAdminService } from "../../services/user/user.admin.service";
import { UserAdminListDto } from "../../dtos/user/admin/user.list.dto";
import { UserUpdateDto } from "../../dtos/user/admin/user.update.dto";





const message404="Bunday idli user topilmadi!"
@ApiTags('User - Admin')
@ApiCookieAuth()
@Controller('admin/user')
@Roles(Role.Admin, Role.SuperAdmin)
export class UserAdminController {
    constructor(private readonly service: UserAdminService) { }

    

    @Get()
    @ApiOkResponse({type:UserAdminListDto,isArray:true})
    async getAll(){
        return this.service.getAllWithNothing<UserAdminListDto>(UserAdminListDto)
    }

    @Patch(":id")
    async update(@Param("id") id:number,@Body() payload:UserUpdateDto){
        return await this.service.baseUpdate<UserUpdateDto>(id,payload,message404)
    }
}