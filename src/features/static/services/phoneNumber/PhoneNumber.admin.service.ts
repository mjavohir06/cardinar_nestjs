import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PhoneNumberRepository } from "../../repositories/phoneNumber.repository";
import { PhoneNumberCUDto } from "../../dtos/admin/phoneNumber/phoneNumber.create.dto";
import { PhoneNumberEntity } from "../../entities/phoneNumber.entity";


@Injectable()
export class PhoneNumberAdminService {

    constructor(private readonly repo:PhoneNumberRepository){

    }

    async create(payload:PhoneNumberCUDto){
        const isExist=await this.repo.findOneBy({phoneNumber:payload.phoneNumber})
        if(isExist) throw new ConflictException("Bu telefon raqam allaqachon ro'yhatdan o'tgan!")
        return await this.repo.save(payload as PhoneNumberEntity)
    }

    async getAll(){
        return await this.repo.find()
    }

    async update(id:number,payload:PhoneNumberCUDto){
        const phone=await this.repo.findOneBy({id})
        if(!phone) throw new NotFoundException("Bunday idli telefon nomer topilmadi!")

        const isExist=await this.repo.findOneBy({phoneNumber:payload.phoneNumber})
        if(isExist) throw new ConflictException("Bu telefon raqam allaqachon ro'yhatdan o'tgan!")
        
        phone.phoneNumber=payload.phoneNumber

        return await this.repo.save(phone)
    }

    async delete(id:number){
        const phone=await this.repo.findOneBy({id})
        if(!phone) throw new NotFoundException("Bunday idli telefon nomer topilmadi!")
        return await this.repo.remove(phone)
    }
}