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
import { SocialLinkAdminService } from "../../services/socialLink/socialLink.admin.service";
import { SocialLinkCreateDto } from "../../dtos/admin/socialLink/socialLink.create.dto";
import { SocialLinkAdminListDto } from "../../dtos/admin/socialLink/socialLink.list.dto";
import { SocialLinkUpdateDto } from "../../dtos/admin/socialLink/socialLink.update.dto";



@ApiTags('SocialLink - Admin')
@ApiCookieAuth()
@Controller('admin/socialLink')
@Roles(Role.Admin, Role.SuperAdmin)
export class SocialLinkAdminController {
  constructor(private readonly service: SocialLinkAdminService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon', { storage: storageOptions }))
  async create(@Body() payload: SocialLinkCreateDto, @UploadedFile() icon: Express.Multer.File) {
    return await this.service.create(payload,icon)
  }

  @Get()
  @ApiOkResponse({type:PaginatedResultDto(SocialLinkAdminListDto)})
  async getAll(@Query() filters: SearchFilters,@Req() req:Request) {
    const result=await this.service.getAll(filters)
    result.data.forEach((item) => (item.icon = getFullPath(req, item.icon)))
    return result
  }

  @Patch(":id")
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon', { storage: storageOptions }))
  async update(@Param("id") id:number,@Body() payload: SocialLinkUpdateDto, @UploadedFile() icon?: Express.Multer.File){
    return await this.service.update(id,payload,icon)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.delete(id)
  }
}
