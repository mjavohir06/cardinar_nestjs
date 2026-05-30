import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { MaterialEntity } from "../entities/material.entity";


@Injectable()

export class MaterialRepository extends BaseRepository<MaterialEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(MaterialEntity)
        protected readonly repo: Repository<MaterialEntity>,
    ) {
        super()
    }


}