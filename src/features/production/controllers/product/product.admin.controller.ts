import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ProductAdminService } from "../../services/product/product.admin.service";
import { ProductCreateDto } from "../../dtos/product/admin/product.create.dto";
import { ProductEntity } from "../../entities/product.entity";
import { ProductAdminListDto } from "../../dtos/product/admin/product.list.dto";
import { SearchFilters } from "@/core/filters/search.filters";
import { ProductUpdateDto } from "../../dtos/product/admin/product.update.dto";






@ApiTags('Product - Admin')
@ApiCookieAuth()
@Controller('admin/product')
@Roles(Role.Admin, Role.SuperAdmin)
export class ProductAdminController {
  constructor(private readonly service: ProductAdminService) { }

  @Post()
  async create(@Body() payload: ProductCreateDto) {
    return await this.service.create(payload as ProductEntity)
  }

  @Get()
  @ApiOkResponse({type:ProductAdminListDto,isArray:true})
  async getAll(@Query() filter:SearchFilters) {
    const result=await this.service.getAllWithSearch<ProductAdminListDto>(filter,ProductAdminListDto,"title")
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: ProductUpdateDto){
    return await this.service.update(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
