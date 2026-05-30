import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";;
import { ArticulAdminService } from "../../services/articul/articul.admin.service";
import { ArticulCreateAdmin } from "../../dtos/articul/admin/articul.create.admin.dto";
import { ArticulEntity } from "../../entities/articul.entity";
import { ArticulListAdmin } from "../../dtos/articul/admin/articul.list.admin.dto";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import { ArticulUpdateAdmin } from "../../dtos/articul/admin/articul.update.admin.dto";






@ApiTags('Articul - Admin')
@ApiCookieAuth()
@Controller('admin/articul')
@Roles(Role.Admin, Role.SuperAdmin)
export class ArticulAdminController {
  constructor(private readonly service: ArticulAdminService) { }

  @Post()
  async create(@Body() payload: ArticulCreateAdmin) {
    return await this.service.create(payload as ArticulEntity)
  }

  @Get()
  @ApiOkResponse({type:ArticulListAdmin,isArray:true})
  async getAll(@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<ArticulListAdmin>(filter,ArticulListAdmin)
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: ArticulUpdateAdmin){
    return await this.service.update(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
