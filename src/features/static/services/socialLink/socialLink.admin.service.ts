import { Injectable, NotFoundException } from "@nestjs/common";
import { SearchFilters } from "@/core/filters/search.filters";
import { SocialLinkCreateDto } from "../../dtos/admin/socialLink/socialLink.create.dto";
import { SocialLinkEntity } from "../../entities/socialLink.entity";
import { SocialLinkRepository } from "../../repositories/socialLink.repository";
import { SocialLinkUpdateDto } from "../../dtos/admin/socialLink/socialLink.update.dto";


@Injectable()
export class SocialLinkAdminService {

    constructor(private readonly repo:SocialLinkRepository){

    }

    async create(payload:SocialLinkCreateDto, icon: Express.Multer.File){
        return await this.repo.save({...payload,icon:icon.path} as SocialLinkEntity)
    }

    async getAll(filters:SearchFilters){

        return await this.repo.getAll(filters)
    }

    async update(id:number,payload:SocialLinkUpdateDto, icon?: Express.Multer.File){
        const link=await this.repo.findOneBy({id})
        if(!link) throw new NotFoundException("Bunday idli link topilmadi!")
        if(icon) link.icon=icon.path
        
        Object.assign(
            link,
            Object.fromEntries(Object.entries(payload).filter(([key,value])=>value!==null))
        )

        return await this.repo.save(link)
    }

    async delete(id:number){
        const link=await this.repo.findOneBy({id})
        if(!link) throw new NotFoundException("Bunday idli link topilmadi!")
        return await this.repo.remove(link)
    }
}