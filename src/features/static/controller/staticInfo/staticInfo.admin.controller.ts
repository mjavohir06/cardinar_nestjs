import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { BannerUpdateDto } from "../../dtos/admin/banner/banner.update.dto";
import { SearchFilters } from "@/core/filters/search.filters";
import { storageOptions } from "@/configs/multer.configs";
import { FileInterceptor } from '@nestjs/platform-express';
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { BannerAdminListDto } from "../../dtos/admin/banner/bannner.list.dto";
import getFullPath from "@/core/utils/get-full-path";
import type{ Request } from "express";
import { PhoneNumberAdminService } from "../../services/phoneNumber/PhoneNumber.admin.service";
import { PhoneNumberCUDto } from "../../dtos/admin/phoneNumber/phoneNumber.create.dto";
import { PhoneNumberListAdminDto } from "../../dtos/admin/phoneNumber/phoneNumber.list.dto";
import { StaticInfoAdminService } from "../../services/staticInfo/staticInfo.admin.service";
import { StaticInfoCreateDto } from "../../dtos/admin/staticInfo/staticInfo.create.dto";
import { StaticInfoAdminListDto } from "../../dtos/admin/staticInfo/staticInfo.list.dto";
import { StaticInfoUpdateDto } from "../../dtos/admin/staticInfo/staticInfo.update.dto";



@ApiTags('StaticInfo - Admin')
@ApiCookieAuth()
@Controller('admin/staticInfo')
@Roles(Role.Admin, Role.SuperAdmin)
export class StaticInfoAdminController {
  constructor(private readonly service: StaticInfoAdminService) { }

  @Post()
  async create(@Body() payload: StaticInfoCreateDto) {
    return await this.service.create(payload)
  }

  @Get()
  @ApiOkResponse({type:StaticInfoAdminListDto})
  async getAll() {
    const result=await this.service.getAll()
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: StaticInfoUpdateDto){
    return await this.service.update(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.delete(id)
  }
}
