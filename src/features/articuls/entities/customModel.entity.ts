import { BaseModel } from "src/core/base-model.entity"
import { Category_Enum } from "src/core/enums/category.enum"
import { Column, Entity, OneToMany } from "typeorm"
import { CustomProductEntity } from "./customProduct.entity"

@Entity("customModels")
export class CustomModelEntity extends BaseModel {
    @Column({ type: "enum", enum: Category_Enum })
    category!: Category_Enum

    @Column({ type: "varchar", length: 128, unique: true })
    title!: string

    @Column({ type: "varchar", length: 256 })
    image!: string

    @OneToMany(() => CustomProductEntity, (cp) => cp.model)
    customProducts?: CustomProductEntity[]
}