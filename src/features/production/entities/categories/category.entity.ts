import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ProductEntity } from "../products/product.entity";



@Entity("Categories")

export class CategoryEntity extends BaseModel{

    @Column({type:"varchar",length:128})
    title!:string

    @OneToMany(()=>ProductEntity,(product)=>product.category)
    products?:ProductEntity[]

}