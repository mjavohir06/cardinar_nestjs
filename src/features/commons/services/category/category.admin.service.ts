import { Injectable, NotFoundException } from "@nestjs/common";
import ServiceHelper from "@/core/services/service.helper";
import { CategoryRepository } from "../../repositories/category.repo";
import { CategoryEntity } from "../../entities/category.entity";





@Injectable()
export class CategoryAdminService extends ServiceHelper<CategoryEntity> {

    constructor(
        protected readonly repo:CategoryRepository
    ){
        super()
    }
    

    

}