import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { OrderItemEntity } from "../entities/orderItem.entity";
import { OrderEntity } from "../entities/order.entity";
import { ProductEntity } from "@/features/production/entities/product.entity";
import { ArticulEntity } from "@/features/articuls/entities/articul.entity";


@Injectable()

export class OrderItemsRepository extends BaseRepository<OrderItemEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(OrderItemEntity)
        protected readonly repo: Repository<OrderItemEntity>,
        @InjectRepository(OrderEntity)
        protected readonly order: Repository<OrderEntity>,
        @InjectRepository(ProductEntity)
        protected readonly product: Repository<ProductEntity>,
        @InjectRepository(ArticulEntity)
        protected readonly articul: Repository<ArticulEntity>,

    ) {
        super()
    }

    async orderCount(id:number){
        return await this.order.countBy({id})
    }
    async productCount(id:number){
        return await this.product.countBy({id})
    }
    async articulCount(id:number){
        return await this.articul.countBy({id})
    }


    
}