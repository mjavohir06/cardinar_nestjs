import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { CustomModelEntity } from "../entities/customModel.entity";




@Injectable()

export class CustomModelRepository extends BaseRepository<CustomModelEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(CustomModelEntity)
        protected readonly repo: Repository<CustomModelEntity>,
    ) {
        super()
    }


}