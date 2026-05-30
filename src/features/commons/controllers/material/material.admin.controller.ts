import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { MaterialAdminService } from "../../services/material/material.admin.service";
import { MaterialCreateDto } from "../../dtos/material/admin/material.create.dto";
import { MaterialAdminListDto } from "../../dtos/material/admin/material.list.dto";
import { MaterialUpdateDto } from "../../dtos/material/admin/material.update.dto";
import { MaterialEntity } from "../../entities/material.entity";





@ApiTags('Material - Admin')
@ApiCookieAuth()
@Controller('admin/material')
@Roles(Role.Admin, Role.SuperAdmin)
export class MaterialAdminController {
  constructor(private readonly service: MaterialAdminService) { }

  @Post()
  async create(@Body() payload: MaterialCreateDto) {
    return await this.service.baseCreate(payload as MaterialEntity)
  }

  @Get()
  @ApiOkResponse({type:MaterialAdminListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<MaterialAdminListDto>(MaterialAdminListDto)
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: MaterialUpdateDto){
    return await this.service.baseUpdate(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
