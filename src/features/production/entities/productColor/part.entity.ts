import { BaseModel } from "src/core/base-model.entity";
import { Category_Enum } from "src/core/enums/category.enum";
import { Part_Enum } from "src/core/enums/part.enum";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ColorEntity } from "./color.entity";
import { MaterialEntity } from "./material.entity";

@Entity("Parts")
export class PartEntity extends BaseModel{
    @Column({enum:Category_Enum})
    category!:Category_Enum

    @Column({enum:Part_Enum})
    part!:Part_Enum

    @Column({length:128})
    title!:string

    @Column()
    colorId!:number

    @ManyToOne(()=>ColorEntity)
    @JoinColumn({name:"colorId"})
    color?:ColorEntity

    @Column()
    materialId!:number

    @ManyToOne(()=>MaterialEntity)
    @JoinColumn({name:"materialId"})
    material?:MaterialEntity

    @Column()
    image!:string
}