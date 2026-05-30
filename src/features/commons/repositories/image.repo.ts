import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { ImageEntity } from "../entities/image.entity";
import { ProductEntity } from "@/features/production/entities/product.entity";



@Injectable()

export class ImageRepository extends BaseRepository<ImageEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(ImageEntity)
        protected readonly repo: Repository<ImageEntity>,
        @InjectRepository(ProductEntity)
        protected readonly product: Repository<ProductEntity>,
    ) {
        super()
    }

    async productFindOneBy(id:number){
        return await this.product.findOneBy({id})
    }


}