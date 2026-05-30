import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { SearchFilters } from "@/core/filters/search.filters";
import { CarModelAdminService } from "../../services/carModel/carModel.admin.service";
import { CarModelCreateDto } from "../../dtos/carModel/admin/carModel.create.dto";
import { CarModelEntity } from "../../entities/carModel.entity";
import { CarModelAdminListDto } from "../../dtos/carModel/admin/carModel.list.dto";
import { CarModelUpdateDto } from "../../dtos/carModel/admin/carModel.update.dto";






@ApiTags('CarModel - Admin')
@ApiCookieAuth()
@Controller('admin/carModel')
@Roles(Role.Admin, Role.SuperAdmin)
export class CarModelAdminController {
  constructor(private readonly service: CarModelAdminService) { }

  @Post()
  async create(@Body() payload: CarModelCreateDto) {
    return await this.service.create(payload as CarModelEntity)
  }

  @Get()
  @ApiOkResponse({type:CarModelAdminListDto,isArray:true})
  async getAll(@Query() filter:SearchFilters) {
    const result=await this.service.getAllWithSearch<CarModelAdminListDto>(filter,CarModelAdminListDto,"title")
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: CarModelUpdateDto){
    return await this.service.update(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
