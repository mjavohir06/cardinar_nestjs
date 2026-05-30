import { Roles } from "@/core/decorators/roles.decorator";
import { Role } from "@/core/enums/role.enum";
import { Body, Controller, Get, } from "@nestjs/common";
import { ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { OrderItemAdminService } from "../../services/orderItem/orderItem.admin.service";
import { OrderItemAdminListDto } from "../../dtos/orderItem/admin/orderItem.list.dto";







@ApiTags('OrderItem - Admin')
@ApiCookieAuth()
@Controller('admin/orderitem')
@Roles(Role.Admin, Role.SuperAdmin)
export class OrderItemAdminController {
    constructor(private readonly service: OrderItemAdminService) { }

    

    @Get()
    @ApiOkResponse({type:OrderItemAdminListDto,isArray:true})
    async getAll(){
        return this.service.getAllWithNothing<OrderItemAdminListDto>(OrderItemAdminListDto)
    }

    
}