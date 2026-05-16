import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { BranchEntity } from "../entities/branch.entity";


@Injectable()

export class BranchRepository extends BaseRepository<BranchEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(BranchEntity)
        protected readonly repo: Repository<BranchEntity>,
    ) {
        super()
    }


}