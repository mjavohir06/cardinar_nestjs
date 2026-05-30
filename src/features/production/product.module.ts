import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartItemEntity } from "./entities/cartItem.entity";

import { PartEntity } from "./entities/part.entity";
import { ProductEntity } from "./entities/product.entity";
import { cartItemRepository } from "./repositories/cartItem.repo";
import { PartRepository } from "./repositories/part.repo";
import { ProductRepository } from "./repositories/product.repo";
import { CartItemAdminService } from "./services/cartItem/cartItem.admin.service";
import { CartItemPublicService } from "./services/cartItem/cartItem.public.service";
import { PartAdminService } from "./services/part/part.admin.service";
import { PartPublicService } from "./services/part/part.public.service";
import { ProductAdminService } from "./services/product/product.admin.service";
import { ProductPublicService } from "./services/product/product.public.service";
import { CategoryEntity } from "../commons/entities/category.entity";
import { ArticulEntity } from "../articuls/entities/articul.entity";
import { ColorEntity } from "../commons/entities/color.entity";
import { MaterialEntity } from "../commons/entities/material.entity";
import { CartItemAdminController } from "./controllers/cartItem/cartItem.admin.controller";
import { CartItemPublicController } from "./controllers/cartItem/cartItem.public.controller";
import { ProductAdminController } from "./controllers/product/product.admin.controller";
import { ProductPublicController } from "./controllers/product/product.public.controller";
import { PartAdminController } from "./controllers/part/part.admin.controller";
import { PartPublicController } from "./controllers/part/part.public.controller";


@Module({
    imports:[
        TypeOrmModule.forFeature([CartItemEntity,PartEntity,ProductEntity,CategoryEntity,ArticulEntity,ColorEntity,MaterialEntity])
    ],
    controllers:[
        CartItemAdminController,
        CartItemPublicController,
        ProductAdminController,
        ProductPublicController,
        PartAdminController,
        PartPublicController

    ],
    providers:[
        CartItemAdminService,
        CartItemPublicService,
        PartAdminService,
        PartPublicService,
        ProductAdminService,
        ProductPublicService,



        //repos
        cartItemRepository,
        PartRepository,
        ProductRepository
    ]
})

export default class ProductModule{}