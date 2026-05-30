import { ProductEntity } from "@/features/production/entities/product.entity";
import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity, OneToMany } from "typeorm";




@Entity("Categories")

export class CategoryEntity extends BaseModel{

    @Column({type:"varchar",length:128})
    title!:string

    @OneToMany(()=>ProductEntity,(product)=>product.category)
    products?:ProductEntity[]

}