import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BranchAdminService } from "../../services/branch/branch.admin.service";
import { BranchCreateDto } from "../../dtos/branch/admin/branch.create.dto";
import { BranchEntity } from "../../entities/branch.entity";
import { BranchAdminListDto } from "../../dtos/branch/admin/branch.list.dto";
import { BranchUpdateDto } from "../../dtos/branch/admin/branch.update.dto";




const message404="Bunday idli branch topilmadi!"
@ApiTags('Branch - Admin')
@ApiCookieAuth()
@Controller('admin/branch')
@Roles(Role.Admin, Role.SuperAdmin)
export class BranchAdminController {
    constructor(private readonly service: BranchAdminService) { }

    @Post()
    async create(@Body() payload:BranchCreateDto){
        return await this.service.baseCreate(payload as BranchEntity)
    }

    @Get()
    @ApiOkResponse({type:BranchAdminListDto,isArray:true})
    async getAll(){
        return this.service.getAllWithNothing<BranchAdminListDto>(BranchAdminListDto)
    }

    @Patch(":id")
    async update(@Param("id") id:number,@Body() payload:BranchUpdateDto){
        return await this.service.baseUpdate<BranchUpdateDto>(id,payload,message404)
    }

    @Delete(":id")
    async delete(@Param("id") id:number){
        return await this.service.baseDelete(id,message404)
    }
}