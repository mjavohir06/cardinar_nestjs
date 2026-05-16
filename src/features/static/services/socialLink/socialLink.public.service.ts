import { Injectable } from "@nestjs/common";
import { SearchFilters } from "@/core/filters/search.filters";
import { SocialLinkRepository } from "../../repositories/socialLink.repository";
import { plainToInstance } from "class-transformer";
import { SocialLinkPublicListDto } from "../../dtos/public/socialLink/socialLink.list.dto";


@Injectable()
export class SocialLinkPublicService {

    constructor(private readonly repo:SocialLinkRepository){

    }


    async getAll(){

        const result=await this.repo.find()
        return plainToInstance(SocialLinkPublicListDto,result,{excludeExtraneousValues:true})
    }

}