import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { StaticInfoRepository } from "../../repositories/staticInfo.repository";
import { StaticInfoEntity } from "../../entities/staticInfo.entity";
import { StaticInfoCreateDto } from "../../dtos/admin/staticInfo/staticInfo.create.dto";
import { StaticInfoUpdateDto } from "../../dtos/admin/staticInfo/staticInfo.update.dto";


@Injectable()
export class StaticInfoAdminService {

    constructor(private readonly repo:StaticInfoRepository){

    }

    async create(payload:StaticInfoCreateDto){
        const isExist=await this.repo.count()
        if(isExist) throw new ConflictException("Statik info allqachon mavjud!")
        return await this.repo.save(payload as StaticInfoEntity)
    }

    async getAll(){
        const result=await this.repo.find()
        if(result.length!==1) throw new NotFoundException("Statik info topilmadi!")
        return result[0]
    }

    async update(id:number,payload:StaticInfoUpdateDto){
        const info=await this.repo.findOneBy({id})
        if(!info) throw new NotFoundException("Bunday idli statik info topilmadi!")
        
        Object.assign(
            info,
            Object.fromEntries(Object.entries(payload).filter(([key,value])=>value!==null))
        )

        return await this.repo.save(info)
    }

    async delete(id:number){
        const phone=await this.repo.findOneBy({id})
        if(!phone) throw new NotFoundException("Bunday idli statik info topilmadi!")
        return await this.repo.remove(phone)
    }
}