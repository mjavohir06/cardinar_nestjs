import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { OrderItemEntity } from "../entities/orderItem.entity";


@Injectable()

export class OrderItemsRepository extends BaseRepository<OrderItemEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(OrderItemEntity)
        protected readonly repo: Repository<OrderItemEntity>,
    ) {
        super()
    }

    
}