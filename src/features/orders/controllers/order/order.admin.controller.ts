import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { OrderAdminService } from "../../services/order/order.admin.service";
import { OrderAdminListDto } from "../../dtos/order/admin/order.list.dto";
import { OrderUpdateDto } from "../../dtos/order/admin/order.update.dto";







@ApiTags('Order - Admin')
@ApiCookieAuth()
@Controller('admin/order')
@Roles(Role.Admin, Role.SuperAdmin)
export class OrderAdminController {
    constructor(private readonly service: OrderAdminService) { }

    

    @Get()
    @ApiOkResponse({type:OrderAdminListDto,isArray:true})
    async getAll(){
        return this.service.getAllWithNothing<OrderAdminListDto>(OrderAdminListDto)
    }

    
}