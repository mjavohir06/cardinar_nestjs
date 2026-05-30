import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { PartEntity } from "../entities/part.entity";
import { MaterialEntity } from "@/features/commons/entities/material.entity";
import { ColorEntity } from "@/features/commons/entities/color.entity";


@Injectable()

export class PartRepository extends BaseRepository<PartEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(PartEntity)
        protected readonly repo: Repository<PartEntity>,
        @InjectRepository(MaterialEntity)
        protected readonly material: Repository<MaterialEntity>,
        @InjectRepository(ColorEntity)
        protected readonly color: Repository<ColorEntity>,
    ) {
        super()
    }

    async materialFindOneBy(id:number){
        return await this.material.findOneBy({id})
    }

    async colorFindOneBy(id:number){
        return await this.color.findOneBy({id})
    }
}