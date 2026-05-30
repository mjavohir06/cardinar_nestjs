import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, } from "@nestjs/common";
import { ApiConsumes, ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { CartItemEntity } from "../../entities/cartItem.entity";
import { CartItemCreateDto } from "../../dtos/cartItem/admin/cartItem.create.dto";
import { CartItemAdminListDto } from "../../dtos/cartItem/admin/cartItem.list.dto";
import { CartItemUpdateDto } from "../../dtos/cartItem/admin/cartItem.update.dto";
import { CartItemAdminService } from "../../services/cartItem/cartItem.admin.service";






@ApiTags('CartItem - Admin')
@ApiCookieAuth()
@Controller('admin/cartItem')
@Roles(Role.Admin, Role.SuperAdmin)
export class CartItemAdminController {
  constructor(private readonly service: CartItemAdminService) { }

  @Post()
  async create(@Body() payload: CartItemCreateDto) {
    return await this.service.create(payload as CartItemEntity)
  }

  @Get()
  @ApiOkResponse({type:CartItemAdminListDto,isArray:true})
  async getAll() {
    const result=await this.service.getAllWithNothing<CartItemAdminListDto>(CartItemAdminListDto)
    return result
  }

  @Patch(":id")
  async update(@Param("id") id:number,@Body() payload: CartItemUpdateDto){
    return await this.service.update(id,payload)
  }

  @Delete(":id")
  async delete(@Param("id") id:number){
    return await this.service.baseDelete(id)
  }
}
