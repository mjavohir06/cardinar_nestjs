import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res, UnauthorizedException, } from "@nestjs/common";

import { ApiCookieAuth, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { OrderPublicListDto } from "../../dtos/order/public/order.list.dto";

import { PaginationFilters } from "@/core/filters/pagination.filters";
import { PaginatedResultDto } from "@/core/paginated-result.dto";
import { OrderUpdateDto } from "../../dtos/order/admin/order.update.dto";
import { Role } from "@/core/enums/role.enum";
import { Roles } from "@/core/decorators/roles.decorator";
import type { Request } from "express";
import { OrderPublicService } from "../../services/order/order.public.service";
import { OrderCreateDto } from "../../dtos/order/admin/order.create.dto";


const message404 = "Bunday idli order topilmadi!"
@ApiTags('Order - Public')
@ApiCookieAuth()
@Controller('public/order')
@Roles(Role.Admin, Role.SuperAdmin, Role.User)
export default class OrderPublicController {
    constructor(
        private readonly service: OrderPublicService
    ) { }


    @Post()
    async create(@Req() req: Request, @Body() payload: OrderCreateDto) {
        const user = req.user
        if (!user) throw new UnauthorizedException()
        return await this.service.create(payload, user.id)
    }

    @Get()
    @ApiOkResponse({ type: PaginatedResultDto(OrderPublicListDto) })
    async getAll(@Query() filter: PaginationFilters) {
        return await this.service.getAllWithFilters<OrderPublicListDto>(filter, OrderPublicListDto)
    }

    @Patch(":id")
    async update(@Param("id") id: number, @Req() req: Request, @Body() payload: OrderUpdateDto) {
        const user = req.user
        if (!user) throw new UnauthorizedException()
        return await this.service.update(id, payload, user.id)
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return await this.service.baseDelete(id, message404)
    }
}