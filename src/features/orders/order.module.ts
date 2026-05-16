import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderEntity } from "./entities/order.entity";
import { BranchEntity } from "./entities/branch.entity";
import { OrderItemEntity } from "./entities/orderItem.entity";
import { BranchRepository } from "./repositories/branch.repository";
import { OrderRepository } from "./repositories/oder.repository";
import { OrderItemsRepository } from "./repositories/orderItem.repository";
import { BranchPublicService } from "./services/branch/branch.public.service";
import { BranchAdminService } from "./services/branch/branch.admin.service";
import BranchPublicController from "./controllers/branch/barnch.public.controller";
import { BranchAdminController } from "./controllers/branch/branch.admin.controller";




@Module({
    imports:[
        TypeOrmModule.forFeature([OrderEntity,BranchEntity,OrderItemEntity])
    ],
    controllers:[
        BranchPublicController,
        BranchAdminController
    ],
    providers:[
        BranchPublicService,
        BranchAdminService,

        //repositories
        BranchRepository,
        OrderRepository,
        OrderItemsRepository,
    ]
})

export default class OrderModule{

}