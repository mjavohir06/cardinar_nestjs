import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { CarMakeEntity } from "./carMake.entity"
import { CarModelEntity } from "./carModel.entity"
import { Category_Enum } from "src/core/enums/category.enum"
import { CustomModelEntity } from "./customModel.entity"

@Entity("customProducts")
export class CustomProductEntity extends BaseModel {
    @Column({ type: "varchar", length: 64 })
    fullName!: string

    @Column({ type: "varchar", length: 16 })
    phoneNumber!: string

    @Column({ type: "varchar", length: 64, nullable: true })
    email?: string

    @Column()
    carMakeId!: number

    @ManyToOne(() => CarMakeEntity, (carMake) => carMake.customProducts, { onDelete: "CASCADE" })
    @JoinColumn({ name: "carMakeId" })
    carMake!: CarMakeEntity

    @Column()
    carModelId!: number

    @ManyToOne(() => CarModelEntity, (carModel) => carModel.customProducts, { onDelete: "CASCADE" })
    @JoinColumn({ name: "carModelId" })
    carModel!: CarModelEntity

    @Column({ type: "enum", enum: Category_Enum })
    category!: Category_Enum

    @Column()
    modelId!: number

    @ManyToOne(() => CustomModelEntity, (model) => model.customProducts, { onDelete: "CASCADE" })
    @JoinColumn({ name: "modelId" })
    model!: CustomModelEntity

    @Column()
    withLogo!: boolean

    @Column({ type: "varchar", length: 256 })
    image!: string

    @Column({ default: true })
    isActive!: boolean
}