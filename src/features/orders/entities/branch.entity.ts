import { BaseModel } from "src/core/base-model.entity"
import { BranchType_Enum } from "src/core/enums/branch.enum"
import { Column, Entity, OneToMany } from "typeorm"
import { OrderEntity } from "./order.entity"


@Entity("branches")
export class BranchEntity extends BaseModel {
    @Column({ type: "varchar", length: 128 })
    title!: string

    @Column({ type: "varchar", length: 128 })
    address!: string

    @Column({ type: "varchar", length: 64, nullable: true })
    district?: string

    @Column({ type: "varchar", length: 64 })
    region!: string

    @Column({ type: "varchar", length: 16 })
    phoneNumber!: string

    @Column({ type: "decimal", precision: 12, scale: 9 })
    longitude!: number

    @Column({ type: "decimal", precision: 12, scale: 9 })
    latitude!: number

    @Column({ default: true })
    isActive!: boolean

    @Column({ type: "enum", enum: BranchType_Enum })
    branchType!: BranchType_Enum

    @OneToMany(() => OrderEntity, (order) => order.branch)
    orders?: OrderEntity[]
}