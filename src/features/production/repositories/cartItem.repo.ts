import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { CartItemEntity } from "../entities/cartItem.entity";
import { ProductEntity } from "../entities/product.entity";
import { ArticulEntity } from "@/features/articuls/entities/articul.entity";


@Injectable()

export class cartItemRepository extends BaseRepository<CartItemEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(CartItemEntity)
        protected readonly repo: Repository<CartItemEntity>,
        @InjectRepository(ProductEntity)
        protected readonly product: Repository<ProductEntity>,
        @InjectRepository(ArticulEntity)
        protected readonly articul: Repository<ArticulEntity>,
    ) {
        super()
    }

    async productFindOneBy(id:number){
        return await this.product.findOneBy({id})
    }

    async articulFindOneBy(id:number){
        return await this.articul.findOneBy({id})
    }

}