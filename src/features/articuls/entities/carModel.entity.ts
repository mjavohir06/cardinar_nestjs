import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { CarMakeEntity } from "./carMake.entity"
import { ArticulEntity } from "./articul.entity"
import { CustomProductEntity } from "./customProduct.entity"


@Entity("carModels")
export class CarModelEntity extends BaseModel {
    @Column()
    carMakeId!: number

    @ManyToOne(() => CarMakeEntity, (carMake) => carMake.carModels, { onDelete: "CASCADE" })
    @JoinColumn({ name: "carMakeId" })
    carMake!: CarMakeEntity

    @Column({ type: "varchar", length: 64, unique: true })
    title!: string

    @OneToMany(() => ArticulEntity, (articul) => articul.carModel)
    articuls?: ArticulEntity[]

    @OneToMany(() => CustomProductEntity, (cp) => cp.carModel)
    customProducts?: CustomProductEntity[]
}