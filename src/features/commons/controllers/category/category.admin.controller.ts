import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CategoryAdminService } from "../../services/category/category.admin.service";
import { CategoryCreateDto } from "../../dtos/category/admin/category.create.dto";
import { CategoryUpdateDto } from "../../dtos/category/admin/category.update.dto";
import { CategoryAdminListDto } from "../../dtos/category/admin/category.list.dto";
import { CategoryEntity } from "../../entities/category.entity";





@ApiTags('Category - Admin')
@ApiCookieAuth()
@Controller('admin/category')
@Roles(Role.Admin, Role.SuperAdmin)
export class CategoryAdminController {
  constructor(private readonly service: CategoryAdminService) { }

  @Post()
  async create(@Body() payload: CategoryCreateDto) {
    return await this.service.baseCreate(payload as CategoryEntity)
  }

  @Get()
  @ApiOkResponse({type:CategoryAdminListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<CategoryAdminListDto>(CategoryAdminListDto)
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: CategoryUpdateDto){
    return await this.service.baseUpdate(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
