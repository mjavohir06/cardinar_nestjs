import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { CarMakeEntity } from "../entities/carMake.entity";
import { ProductEntity } from "@/features/production/entities/product.entity";
import { CarModelEntity } from "../entities/carModel.entity";




@Injectable()

export class CarMakeRepository extends BaseRepository<CarMakeEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(CarMakeEntity)
        protected readonly repo: Repository<CarMakeEntity>,
    ) {
        super()
    }

}