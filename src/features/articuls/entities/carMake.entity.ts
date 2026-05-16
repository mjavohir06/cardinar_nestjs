import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity, OneToMany } from "typeorm"
import { CarModelEntity } from "./carModel.entity"
import { CustomProductEntity } from "./customProduct.entity"

@Entity("carMakes")
export class CarMakeEntity extends BaseModel {
    @Column({ type: "varchar", length: 64, unique: true })
    title!: string

    @OneToMany(() => CarModelEntity, (model) => model.carMake)
    carModels?: CarModelEntity[]

    @OneToMany(() => CustomProductEntity, (cp) => cp.carMake)
    customProducts?: CustomProductEntity[]
}