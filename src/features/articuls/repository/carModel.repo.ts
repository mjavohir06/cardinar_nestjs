import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { CarModelEntity } from "../entities/carModel.entity";
import { CarMakeEntity } from "../entities/carMake.entity";




@Injectable()

export class CarModelRepository extends BaseRepository<CarModelEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(CarModelEntity)
        protected readonly repo: Repository<CarModelEntity>,
        @InjectRepository(CarMakeEntity)
        protected readonly carMake: Repository<CarMakeEntity>,
    ) {
        super()
    }

    async carMakeFindOneBy(id:number){
        return await this.carMake.findOneBy({id})
    }

}