import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res, UnauthorizedException,  } from "@nestjs/common";

import { ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { OrderPublicListDto } from "../../dtos/order/public/order.list.dto";

import { PaginationFilters } from "@/core/filters/pagination.filters";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { OrderUpdateDto } from "../../dtos/order/admin/order.update.dto";
import { Role } from "@/core/enums/role.enum";
import { Roles } from "@/core/decorators/roles.decorator";
import type{ Request } from "express";
import { OrderPublicService } from "../../services/order/order.public.service";
import { OrderCreateDto } from "../../dtos/order/admin/order.create.dto";
import { OrderItemPublicService } from "../../services/orderItem/orderItem.public.service";
import { OrderItemCreateDto } from "../../dtos/orderItem/admin/orderItem.create.dto";
import { OrderItemUpdateDto } from "../../dtos/orderItem/admin/orderItem.update.dto";
import { OrderItemPublicListDto } from "../../dtos/orderItem/public/orderItem.list.dto";


const message404="Bunday idli orderItem topilmadi!"
@ApiTags('OrderItem - Public')
@ApiCookieAuth()
@Controller('public/orderitem')
@Roles(Role.Admin, Role.SuperAdmin,Role.User)
export default class OrderItemPublicController {
    constructor(
        private readonly service: OrderItemPublicService
    ) { }


    @Post()
    async create(@Body() payload:OrderItemCreateDto){
        return await this.service.create(payload)
    }

    @Get()
    @ApiOkResponse({type:PaginatedResultDto(OrderItemPublicListDto)})
    async getAll(@Query() filter:PaginationFilters){
        return await this.service.getAllWithFilters<OrderItemPublicListDto>(filter,OrderItemPublicListDto)
    }

    @Patch(":id")
    async update(@Param("id") id:number,@Body() payload:OrderItemUpdateDto){
        return await this.service.update(id,payload)
    }

    @Delete(":id")
    async delete(@Param("id") id:number){
        return await this.service.baseDelete(id,message404)
    }
}