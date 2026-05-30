import { Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { OrderRepository } from "../../repositories/oder.repository";
import { OrderEntity } from "../../entities/order.entity";
import { OrderCreateDto } from "../../dtos/order/admin/order.create.dto";


const message404="Bunday idli orderni topilmadi!"


@Injectable()
export class OrderAdminService extends ServiceHelper<OrderEntity> {

    constructor(
        protected readonly repo:OrderRepository
    ){
        super()
    }
    

    

}