import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { CustomProductEntity } from "../entities/customProduct.entity";
import { CarModelEntity } from "../entities/carModel.entity";
import { CustomModelEntity } from "../entities/customModel.entity";




@Injectable()

export class CustomProductRepository extends BaseRepository<CustomProductEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(CustomProductEntity)
        protected readonly repo: Repository<CustomProductEntity>,
        @InjectRepository(CustomProductEntity)
        protected readonly carMake: Repository<CustomProductEntity>,
        @InjectRepository(CarModelEntity)
        protected readonly carModel: Repository<CarModelEntity>,
        @InjectRepository(CustomModelEntity)
        protected readonly model: Repository<CustomModelEntity>,
    ) {
        super()
    }

    async carMakeFindOneBy(id:number){
        return await this.carMake.findOneBy({id})
    }

    async carModelFindOneBy(id:number){
        return await this.carModel.findOneBy({id})
    }

    async cModelFindOneBy(id:number){
        return await this.model.findOneBy({id})
    }
}