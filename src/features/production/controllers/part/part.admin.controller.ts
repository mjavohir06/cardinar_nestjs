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
import { PartAdminService } from "../../services/part/part.admin.service";
import { PartCreateDto } from "../../dtos/part/admin/part.create.dto";
import { PartAdminListDto } from "../../dtos/part/admin/part.list.dto";
import { PartUpdateDto } from "../../dtos/part/admin/part.update.dto";





@ApiTags('Part - Admin')
@ApiCookieAuth()
@Controller('admin/part')
@Roles(Role.Admin, Role.SuperAdmin)
export class PartAdminController {
  constructor(private readonly service: PartAdminService) { }

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async create(@Body() payload: PartCreateDto, @UploadedFile() image: Express.Multer.File) {
    return await this.service.create(payload,image)
  }

  @Get()
  @ApiOkResponse({type:PaginatedResultDto(PartAdminListDto)})
  async getAll(@Req() req:Request,@Query() filter:PaginationFilters) {
    const result=await this.service.getAllWithFilters<PartAdminListDto>(filter,PartAdminListDto)
    result.data.forEach((item) => (item.image = getFullPath(req, item.image)))
    return result
  }

  @Patch(":id")
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: storageOptions }))
  async update(@Param("id") id: number, @Body() payload: PartUpdateDto, @UploadedFile() image?: Express.Multer.File) {
    return await this.service.update(id, payload,image)
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return await this.service.baseDelete(id)
  }
}
