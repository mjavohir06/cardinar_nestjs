import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { SearchFilters } from "@/core/filters/search.filters";
import { CarMakeAdminService } from "../../services/carMake/carMake.admin.service";
import { CarMakeCreateDto } from "../../dtos/carMake/admin/carMake.create.dto";
import { CarMakeEntity } from "../../entities/carMake.entity";
import { CarMakeAdminListDto } from "../../dtos/carMake/admin/carMake.list.dto";
import { CarMakeUpdateDto } from "../../dtos/carMake/admin/carMake.update.dto";






@ApiTags('CarMake - Admin')
@ApiCookieAuth()
@Controller('admin/carMake')
@Roles(Role.Admin, Role.SuperAdmin)
export class CarMakeAdminController {
  constructor(private readonly service: CarMakeAdminService) { }

  @Post()
  async create(@Body() payload: CarMakeCreateDto) {
    return await this.service.baseCreate(payload as CarMakeEntity)
  }

  @Get()
  @ApiOkResponse({type:CarMakeAdminListDto,isArray:true})
  async getAll(@Query() filter:SearchFilters) {
    const result=await this.service.getAllWithSearch<CarMakeAdminListDto>(filter,CarMakeAdminListDto,"title")
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: CarMakeUpdateDto){
    return await this.service.baseUpdate(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
