import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UploadedFile, UseInterceptors, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { storageOptions } from "@/configs/multer.configs";
import { FileInterceptor } from "@nestjs/platform-express";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import getFullPath from "@/core/utils/get-full-path";
import type{ Request } from "express";
import { CustomProductAdminService } from "../../services/customProduct/customProduct.admin.service";
import { CustomProductCreateDto } from "../../dtos/customProduct/admin/cProduct.create.dto";
import { CustomProductAdminListDto } from "../../dtos/customProduct/admin/cProduct.list.dto";
import { CustomProductUpdateDto } from "../../dtos/customProduct/admin/cProduct.update.dto";





@ApiTags('CustomProduct - Admin')
@ApiCookieAuth()
@Controller('admin/customProduct')
@Roles(Role.Admin, Role.SuperAdmin)
export class CustomProductAdminController {
  constructor(private readonly service: CustomProductAdminService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async create(@Body() payload: CustomProductCreateDto, @UploadedFile() image: Express.Multer.File) {
    return await this.service.create(payload,image)
  }

  @Get()
  @ApiOkResponse({type:PaginatedResultDto(CustomProductAdminListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<CustomProductAdminListDto>(filter,CustomProductAdminListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

  @Patch(":id")
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async update(@Param("id") id: number, @Body() payload: CustomProductUpdateDto, @UploadedFile() image?: Express.Multer.File) {
    return await this.service.update(id, payload,image)
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return await this.service.baseDelete(id)
  }
}
