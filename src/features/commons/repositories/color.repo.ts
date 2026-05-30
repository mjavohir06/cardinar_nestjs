import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { ColorEntity } from "../entities/color.entity";



@Injectable()

export class ColorRepository extends BaseRepository<ColorEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(ColorEntity)
        protected readonly repo: Repository<ColorEntity>,
    ) {
        super()
    }


}