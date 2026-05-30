import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticulEntity } from "./entities/articul.entity";
import { CarMakeEntity } from "./entities/carMake.entity";
import { CarModelEntity } from "./entities/carModel.entity";
import { CustomModelEntity } from "./entities/customModel.entity";
import { CustomProductEntity } from "./entities/customProduct.entity";
import { ArticulRepository } from "./repository/articul.repo";
import { CarMakeRepository } from "./repository/carMake.repo";
import { CarModelRepository } from "./repository/carModel.repo";
import { CustomModelRepository } from "./repository/customModel.repo";
import { CustomProductRepository } from "./repository/customProduct.repo";
import { ProductEntity } from "../production/entities/product.entity";
import { ArticulAdminService } from "./services/articul/articul.admin.service";
import { ArticulPublicService } from "./services/articul/articul.public.service";
import { CarMakeAdminService } from "./services/carMake/carMake.admin.service";
import { CarMakePublicService } from "./services/carMake/carMake.public.service";
import { CarModelAdminService } from "./services/carModel/carModel.admin.service";
import { CarModelPublicService } from "./services/carModel/carModel.public.service";
import { CustomModelAdminService } from "./services/customModel/customModel.admin.service";
import { CustomModelPublicService } from "./services/customModel/customModel.public.service";
import { CustomProductAdminService } from "./services/customProduct/customProduct.admin.service";
import { CustomProductPublicService } from "./services/customProduct/customProduct.public.service";
import { CustomProductAdminController } from "./controllers/customProduct/customProduct.admin.controller";
import { CustomProductPublicController } from "./controllers/customProduct/customProduct.public.controller";
import { CustomModelAdminController } from "./controllers/customModel/customModel.admin.controller";
import { CustomModelPublicController } from "./controllers/customModel/customModel.public.controller";
import { ArticulAdminController } from "./controllers/articul/articul.admin.controller";
import { ArticulPublicController } from "./controllers/articul/articul.public.controller";
import { CarMakeAdminController } from "./controllers/carMake/carMake.admin.controller";
import { CarMakePublicController } from "./controllers/carMake/carMake.public.controller";
import { CarModelAdminController } from "./controllers/carModel/carModel.admin.controller";
import { CarModelPublicController } from "./controllers/carModel/carModel.public.controller";


@Module({
    imports:[
        TypeOrmModule.forFeature([ArticulEntity,CarMakeEntity,CarModelEntity,CustomModelEntity,CustomProductEntity,ProductEntity])
    ],
    controllers:[
        ArticulAdminController,
        ArticulPublicController,
        CarMakeAdminController,
        CarMakePublicController,
        CarModelAdminController,
        CarModelPublicController,
        CustomModelAdminController,
        CustomModelPublicController,
        CustomProductAdminController,
        CustomProductPublicController
    ],
    providers:[
        ArticulAdminService,
        ArticulPublicService,
        CarMakeAdminService,
        CarMakePublicService,
        CarModelAdminService,
        CarModelPublicService,
        CustomModelAdminService,
        CustomModelPublicService,
        CustomProductAdminService,
        CustomProductPublicService,


        //repo
        ArticulRepository,
        CarMakeRepository,
        CarModelRepository,
        CustomModelRepository,
        CustomProductRepository
    ]
})

export default class ArticulModule{}