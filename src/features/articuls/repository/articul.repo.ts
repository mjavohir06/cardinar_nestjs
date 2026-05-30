import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { ArticulEntity } from "../entities/articul.entity";
import { CarModelEntity } from "../entities/carModel.entity";
import { ProductEntity } from "@/features/production/entities/product.entity";



@Injectable()

export class ArticulRepository extends BaseRepository<ArticulEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(ArticulEntity)
        protected readonly repo: Repository<ArticulEntity>,
        @InjectRepository(CarModelEntity)
        protected readonly carModel: Repository<CarModelEntity>,
        @InjectRepository(ProductEntity)
        protected readonly product: Repository<ProductEntity>,
    ) {
        super()
    }

    async carModelFindOneBy(id:number){
        return await this.carModel.findOneBy({id})
    }

    async productFindOneBy(id:number){
        return await this.product.findOneBy({id})
    }
}