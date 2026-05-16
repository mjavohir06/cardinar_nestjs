import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { StaticInfoEntity } from "../entities/staticInfo.entity";
import { Injectable } from "@nestjs/common";


@Injectable()

export class StaticInfoRepository extends BaseRepository<StaticInfoEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(StaticInfoEntity)
        protected readonly repo: Repository<StaticInfoEntity>,
    ) {
        super()
    }
}