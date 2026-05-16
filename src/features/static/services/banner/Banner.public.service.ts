import { Injectable } from "@nestjs/common";
import { BannerRepository } from "../../repositories/banner.repository";
import { SearchFilters } from "@/core/filters/search.filters";


@Injectable()
export class BannerPublicService {

    constructor(private readonly repo:BannerRepository){

    }


    async getAll(filters:SearchFilters){

        return await this.repo.getAll(filters)
    }

}