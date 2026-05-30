import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { BranchEntity } from "../../entities/branch.entity";
import { BranchRepository } from "../../repositories/branch.repository";
import ServiceHelper from "@/core/services/service.helper";
import { OrderEntity } from "../../entities/order.entity";
import { OrderRepository } from "../../repositories/oder.repository";
import { OrderCreateDto } from "../../dtos/order/admin/order.create.dto";
import { OrderUpdateDto } from "../../dtos/order/admin/order.update.dto";


const message404="Bunday idli order topilmadi!"


@Injectable()
export class OrderPublicService extends ServiceHelper<OrderEntity> {

    constructor(
        protected readonly repo:OrderRepository
    ){
        super()
    }

    private async tekshir(payload:OrderUpdateDto){
        if(payload.branchId){
            const ent=await this.repo.branchFind(payload.branchId)
            if(!ent) throw new BadRequestException("Branch id noto'g'ri!")
        }
        return true
    }


    async create(payload:OrderCreateDto,userId:number){
        await this.tekshir(payload)
        return await this.baseCreate({...payload,userId} as OrderEntity)
    }

    async update(id:number,payload:OrderUpdateDto,userId:number){
        await this.tekshir(payload)
        return await this.baseUpdate(id,{...payload,userId} as OrderEntity,message404)
    }

}