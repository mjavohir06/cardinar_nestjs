import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { ProductEntity } from "../products/product.entity";
import { PartEntity } from "./part.entity";



@Entity("productColor")
export class ColorEntity extends BaseModel{
    @Column({length:64})
    title!:string

    @Column({length:12})
    color!:string

    @OneToMany(()=>PartEntity,(part)=>part.color)
    parts?:PartEntity[]

    @ManyToMany(()=>ProductEntity)
    products?:ProductEntity[]
}