import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { PhoneNumberEntity } from "../entities/phoneNumber.entity";


import { Injectable } from "@nestjs/common";


@Injectable()

export class PhoneNumberRepository extends BaseRepository<PhoneNumberEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(PhoneNumberEntity)
        protected readonly repo: Repository<PhoneNumberEntity>,
    ) {
        super()
    }
}