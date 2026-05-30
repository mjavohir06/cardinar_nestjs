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
import { CustomModelAdminService } from "../../services/customModel/customModel.admin.service";
import { CustomModelCreateDto } from "../../dtos/customModel/admin/cModel.create.dto";
import { CustomModelAdminListDto } from "../../dtos/customModel/admin/cModel.list.dto";
import { CustomModelUpdateDto } from "../../dtos/customModel/admin/cModel.update.dto";





@ApiTags('CustomModel - Admin')
@ApiCookieAuth()
@Controller('admin/customModel')
@Roles(Role.Admin, Role.SuperAdmin)
export class CustomModelAdminController {
  constructor(private readonly service: CustomModelAdminService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async create(@Body() payload: CustomModelCreateDto, @UploadedFile() image: Express.Multer.File) {
    return await this.service.create(payload,image)
  }

  @Get()
  @ApiOkResponse({type:PaginatedResultDto(CustomModelAdminListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<CustomModelAdminListDto>(filter,CustomModelAdminListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

  @Patch(":id")
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async update(@Param("id") id: number, @Body() payload: CustomModelUpdateDto, @UploadedFile() image?: Express.Multer.File) {
    return await this.service.update(id, payload,image)
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return await this.service.baseDelete(id)
  }
}
