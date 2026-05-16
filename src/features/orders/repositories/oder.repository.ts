import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { OrderEntity } from "../entities/order.entity";


@Injectable()

export class OrderRepository extends BaseRepository<OrderEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(OrderEntity)
        protected readonly repo: Repository<OrderEntity>,
    ) {
        super()
    }

    
}