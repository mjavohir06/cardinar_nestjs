import { Injectable } from "@nestjs/common";
import { BannerRepository } from "../../repositories/banner.repository";
import { SearchFilters } from "@/core/filters/search.filters";
import { PhoneNumberRepository } from "../../repositories/phoneNumber.repository";
import { plainToInstance } from "class-transformer";
import { PhoneNumberListPublicDto } from "../../dtos/public/phoneNumber/phoneNumber.list.dto";


@Injectable()
export class PhoneNumberPublicService {

    constructor(private readonly repo:PhoneNumberRepository){

    }


    async getAll(){

        const result=await this.repo.find()
        
        return plainToInstance(PhoneNumberListPublicDto,result,{excludeExtraneousValues:true})
    }

}