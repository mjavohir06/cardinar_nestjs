import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { RequestEntity } from "../entities/request.entity";


@Injectable()

export class RequestRepository extends BaseRepository<RequestEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(RequestEntity)
        protected readonly repo: Repository<RequestEntity>,
    ) {
        super()
    }


}