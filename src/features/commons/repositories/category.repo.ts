import { BaseRepository } from "@/core/repository/BaseRepository";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ConfigService } from "@nestjs/config";


import { Injectable } from "@nestjs/common";
import { CategoryEntity } from "../entities/category.entity";



@Injectable()

export class CategoryRepository extends BaseRepository<CategoryEntity> {
    constructor(
        protected readonly config: ConfigService,
        @InjectRepository(CategoryEntity)
        protected readonly repo: Repository<CategoryEntity>,
    ) {
        super()
    }


}