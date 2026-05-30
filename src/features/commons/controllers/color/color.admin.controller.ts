import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ColorAdminService } from "../../services/color/color.admin.service";
import { ColorEntity } from "../../entities/color.entity";
import { ColorCreateDto } from "../../dtos/color/admin/color.create.dto";
import { ColorAdminListDto } from "../../dtos/color/admin/color.list.dto";
import { ColorUpdateDto } from "../../dtos/color/admin/color.update.dto";





@ApiTags('Color - Admin')
@ApiCookieAuth()
@Controller('admin/color')
@Roles(Role.Admin, Role.SuperAdmin)
export class ColorAdminController {
  constructor(private readonly service: ColorAdminService) { }

  @Post()
  async create(@Body() payload: ColorCreateDto) {
    return await this.service.baseCreate(payload as ColorEntity)
  }

  @Get()
  @ApiOkResponse({type:ColorAdminListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<ColorAdminListDto>(ColorAdminListDto)
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: ColorUpdateDto){
    return await this.service.baseUpdate(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
