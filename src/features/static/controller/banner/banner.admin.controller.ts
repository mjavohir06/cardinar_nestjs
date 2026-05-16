import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BannerAdminService } from "../../services/banner/Banner.admin.service";
import { BannerCreateDto } from "../../dtos/admin/banner/banner.create.dto";
import { BannerUpdateDto } from "../../dtos/admin/banner/banner.update.dto";
import { SearchFilters } from "@/core/filters/search.filters";
import { storageOptions } from "@/configs/multer.configs";
import { FileInterceptor } from '@nestjs/platform-express';
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { BannerAdminListDto } from "../../dtos/admin/banner/bannner.list.dto";
import getFullPath from "@/core/utils/get-full-path";
import type{ Request } from "express";



@ApiTags('Banner - Admin')
@ApiCookieAuth()
@Controller('admin/banner')
@Roles(Role.Admin, Role.SuperAdmin)
export class BannerAdminController {
  constructor(private readonly service: BannerAdminService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async create(@Body() payload: BannerCreateDto, @UploadedFile() image: Express.Multer.File) {
    return await this.service.create(payload,image)
  }

  @Get()
  @ApiOkResponse({type:PaginatedResultDto(BannerAdminListDto)})
  async getAll(@Query() filters: SearchFilters,@Req() req:Request) {
    const result=await this.service.getAll(filters)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

  @Patch(":id")
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async update(@Param("id") id:number,@Body() payload: BannerUpdateDto, @UploadedFile() image?: Express.Multer.File){
    return await this.service.update(id,payload,image)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.delete(id)
  }
}
