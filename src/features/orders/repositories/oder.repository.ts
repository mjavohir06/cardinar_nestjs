import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { OrderEntity } from "../entities/order.entity";
import { UserEntity } from "@/features/authentication/entities/user.entity";
import { BranchEntity } from "../entities/branch.entity";


@Injectable()

export class OrderRepository extends BaseRepository<OrderEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(OrderEntity)
        protected readonly repo: Repository<OrderEntity>,
        @InjectRepository(UserEntity)
        protected readonly user: Repository<UserEntity>,
        @InjectRepository(BranchEntity)
        protected readonly branch: Repository<BranchEntity>,
    ) {
        super()
    }

    async userFind(id:number){
        return await this.user.findOneBy({id})
    }

    async branchFind(id:number){
        return await this.branch.findOneBy({id})
    }
    
}