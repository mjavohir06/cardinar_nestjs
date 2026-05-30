import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { OrderEntity } from "../../entities/order.entity";
import { OrderRepository } from "../../repositories/oder.repository";
import { OrderItemsRepository } from "../../repositories/orderItem.repository";
import { OrderItemEntity } from "../../entities/orderItem.entity";
import { OrderItemCreateDto } from "../../dtos/orderItem/admin/orderItem.create.dto";
import { OrderItemUpdateDto } from "../../dtos/orderItem/admin/orderItem.update.dto";


const message404 = "Bunday idli orderItem topilmadi!"


@Injectable()
export class OrderItemPublicService extends ServiceHelper<OrderItemEntity> {

    constructor(
        protected readonly repo: OrderItemsRepository
    ) {
        super()
    }

    private async tekshir(payload: OrderItemCreateDto | OrderItemUpdateDto) {
        if (payload.articulId) {
            const ent = await this.repo.articulCount(payload.articulId)
            if (!ent) throw new BadRequestException("Articul id noto'g'ri!")
        }
        if (payload.productId) {
            const ent = await this.repo.productCount(payload.productId)
            if (!ent) throw new BadRequestException("Product id noto'g'ri!")
        }
        if ('orderId' in payload && payload.orderId) {
            const ent = await this.repo.orderCount(payload.orderId)
            if (!ent) throw new BadRequestException("Order id noto'g'ri!")
        }
        return true
    }


    async create(payload: OrderItemCreateDto) {
        await this.tekshir(payload)
        return await this.baseCreate(payload as OrderItemEntity)
    }

    async update(id: number, payload: OrderItemUpdateDto) {
        await this.tekshir(payload)
        return await this.baseUpdate(id, payload as OrderEntity, message404)
    }

}