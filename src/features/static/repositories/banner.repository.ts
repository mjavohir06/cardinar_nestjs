import { BaseRepository } from "@/core/repository/BaseRepository";

import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, ILike, Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { BannerEntity } from "../entities/banner.entity";
import { Injectable } from "@nestjs/common";
import { SearchFilters } from "@/core/filters/search.filters";
import { plainToInstance } from "class-transformer";
import { BannerPublicListDto } from "../dtos/public/banner/banner.list.dto";


@Injectable()
export class BannerRepository extends BaseRepository<BannerEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(BannerEntity)
        protected readonly repo: Repository<BannerEntity>,
    ) {
        super()
    }

    async getAll(filters: SearchFilters) {
        let whereOptions: FindOptionsWhere<BannerEntity> = {};
        if (filters.search) {
            whereOptions.title = ILike(`%${filters.search}%`);
        }


        const result=await super.getAll(filters, whereOptions,);
        result.data = plainToInstance(BannerPublicListDto, result.data, { excludeExtraneousValues: true }) as []
        return result
    }
}