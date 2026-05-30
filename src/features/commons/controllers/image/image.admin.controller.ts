import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UploadedFile, UseInterceptors, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ColorUpdateDto } from "../../dtos/color/admin/color.update.dto";
import { ImageAdminService } from "../../services/image/image.admin.service";
import { ImageCreateDto } from "../../dtos/image/admin/image.create.dto";
import { storageOptions } from "@/configs/multer.configs";
import { FileInterceptor } from "@nestjs/platform-express";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { ImageAdminListDto } from "../../dtos/image/admin/image.list.dto";
import { PaginationFilters } from "@/core/filters/pagination.filters";
import getFullPath from "@/core/utils/get-full-path";
import type{ Request } from "express";
import { ImageUpdateDto } from "../../dtos/image/admin/image.update.dto";





@ApiTags('Image - Admin')
@ApiCookieAuth()
@Controller('admin/image')
@Roles(Role.Admin, Role.SuperAdmin)
export class ImageAdminController {
  constructor(private readonly service: ImageAdminService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async create(@Body() payload: ImageCreateDto, @UploadedFile() image: Express.Multer.File) {
    return await this.service.create(payload,image)
  }

  @Get()
  @ApiOkResponse({type:PaginatedResultDto(ImageAdminListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<ImageAdminListDto>(filter,ImageAdminListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

  @Patch(":id")
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async update(@Param("id") id: number, @Body() payload: ImageUpdateDto, @UploadedFile() image?: Express.Multer.File) {
    return await this.service.update(id, payload,image)
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return await this.service.baseDelete(id)
  }
}
