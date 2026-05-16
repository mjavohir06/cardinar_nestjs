import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { SocialLinkEntity } from "../entities/socialLink.entity";


import { Injectable } from "@nestjs/common";


@Injectable()

export class SocialLinkRepository extends BaseRepository<SocialLinkEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(SocialLinkEntity)
        protected readonly repo: Repository<SocialLinkEntity>,
    ) {
        super()
    }
}