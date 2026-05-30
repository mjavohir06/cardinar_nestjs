import { Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { OrderRepository } from "../../repositories/oder.repository";
import { OrderEntity } from "../../entities/order.entity";
import { OrderItemEntity } from "../../entities/orderItem.entity";
import { OrderItemsRepository } from "../../repositories/orderItem.repository";


const message404 = "Bunday idli orderni topilmadi!"


@Injectable()
export class OrderItemAdminService extends ServiceHelper<OrderItemEntity> {

    constructor(
        protected readonly repo: OrderItemsRepository
    ) {
        super()
    }

    

}