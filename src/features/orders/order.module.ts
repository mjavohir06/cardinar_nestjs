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
import { OrderAdminService } from "./services/order/order.admin.service";
import { OrderPublicService } from "./services/order/order.public.service";
import { OrderItemAdminService } from "./services/orderItem/orderItem.admin.service";
import { OrderItemPublicService } from "./services/orderItem/orderItem.public.service";
import OrderPublicController from "./controllers/order/order.public.controller";
import { UserEntity } from "../authentication/entities/user.entity";
import { ArticulEntity } from "../articuls/entities/articul.entity";
import { ProductEntity } from "../production/entities/product.entity";
import { OrderAdminController } from "./controllers/order/order.admin.controller";
import { OrderItemAdminController } from "./controllers/orderItem/orderItem.admin.controller";
import OrderItemPublicController from "./controllers/orderItem/orderItem.public.controller";




@Module({
    imports:[
        TypeOrmModule.forFeature([OrderEntity,BranchEntity,OrderItemEntity,UserEntity,ArticulEntity,ProductEntity])
    ],
    controllers:[
        BranchPublicController,
        BranchAdminController,
        OrderPublicController,
        OrderAdminController,
        OrderItemAdminController,
        OrderItemPublicController,
    ],
    providers:[
        BranchPublicService,
        BranchAdminService,
        OrderAdminService,
        OrderPublicService,
        OrderItemAdminService,
        OrderItemPublicService,

        //repositories
        BranchRepository,
        OrderRepository,
        OrderItemsRepository,
    ]
})

export default class OrderModule{

}