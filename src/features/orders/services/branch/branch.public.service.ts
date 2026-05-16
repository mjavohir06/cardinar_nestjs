import { Injectable, NotFoundException } from "@nestjs/common";
import { BranchEntity } from "../../entities/branch.entity";
import { BranchCreateDto } from "../../dtos/branch/admin/branch.create.dto";
import { BranchRepository } from "../../repositories/branch.repository";
import ServiceHelper from "@/core/services/service.helper";
import { BranchUpdateDto } from "../../dtos/branch/admin/branch.update.dto";


const message404="Bunday idli branch topilmadi!"


@Injectable()
export class BranchPublicService extends ServiceHelper<BranchEntity> {

    constructor(
        protected readonly repo:BranchRepository
    ){
        super()
    }

}