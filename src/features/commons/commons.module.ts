import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryEntity } from "./entities/category.entity";
import { CategoryRepository } from "./repositories/category.repo";
import { ImageRepository } from "./repositories/image.repo";
import { MaterialRepository } from "./repositories/material.repo";
import { ColorRepository } from "./repositories/color.repo";
import { CategoryAdminService } from "./services/category/category.admin.service";
import { CategoryPublicService } from "./services/category/category.public.service";
import { CategoryAdminController } from "./controllers/category/category.admin.controller";
import { ImageEntity } from "./entities/image.entity";
import { MaterialEntity } from "./entities/material.entity";
import { ColorEntity } from "./entities/color.entity";
import { ColorAdminService } from "./services/color/color.admin.service";
import { ColorPublicService } from "./services/color/color.public.service";
import { CategoryPublicController } from "./controllers/category/category.public.controller";
import { ColorAdminController } from "./controllers/color/color.admin.controller";
import { ColorPublicController } from "./controllers/color/color.public.controller";
import { MaterialAdminService } from "./services/material/material.admin.service";
import { MaterialPublicService } from "./services/material/material.public.service";
import { MAterialPublicController } from "./controllers/material/material.public.controller";
import { MaterialAdminController } from "./controllers/material/material.admin.controller";
import { ImageAdminService } from "./services/image/image.admin.service";
import { ImagePublicService } from "./services/image/image.public.service";
import { ProductEntity } from "../production/entities/product.entity";
import { ImagePublicController } from "./controllers/image/image.public.controller";
import { ImageAdminController } from "./controllers/image/image.admin.controller";





@Module({
    imports:[
        TypeOrmModule.forFeature([CategoryEntity,ImageEntity,MaterialEntity,ColorEntity,ProductEntity])
    ],
    controllers:[
        CategoryAdminController,
        CategoryPublicController,
        ColorAdminController,
        ColorPublicController,
        MaterialAdminController,
        MAterialPublicController,
        ImageAdminController,
        ImagePublicController,

    ],
    providers:[
        CategoryAdminService,
        CategoryPublicService,
        ColorAdminService,
        ColorPublicService,
        MaterialAdminService,
        MaterialPublicService,
        ImageAdminService,
        ImagePublicService,

        //repo
        CategoryRepository,
        ImageRepository,
        MaterialRepository,
        ColorRepository
    ]
})

export default class CommonsModule{}