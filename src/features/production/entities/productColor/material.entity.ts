import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { PartEntity } from "./part.entity";


@Entity("Materials")
export class MaterialEntity extends BaseModel{
    @Column()
    title!:string

    @Column({nullable:true})
    description?:string

    @OneToMany(()=>PartEntity,(part)=>part.material)
    parts?:PartEntity[]
}