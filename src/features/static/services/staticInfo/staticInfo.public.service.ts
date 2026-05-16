import { Injectable, NotFoundException } from "@nestjs/common";
import { BannerRepository } from "../../repositories/banner.repository";
import { SearchFilters } from "@/core/filters/search.filters";
import { PhoneNumberRepository } from "../../repositories/phoneNumber.repository";
import { plainToInstance } from "class-transformer";
import { PhoneNumberListPublicDto } from "../../dtos/public/phoneNumber/phoneNumber.list.dto";
import { StaticInfoRepository } from "../../repositories/staticInfo.repository";
import { StaticInfoPublicListDto } from "../../dtos/public/staticInfo/staticInfo.list.dto";


@Injectable()
export class StaticInfoPublicService {

    constructor(private readonly repo:StaticInfoRepository){

    }


    async getAll(){

        const result=await this.repo.find()
        if(result.length!==1) throw new NotFoundException("Statik info topilmadi!")
        return plainToInstance(StaticInfoPublicListDto,result[0],{excludeExtraneousValues:true})
    }

}