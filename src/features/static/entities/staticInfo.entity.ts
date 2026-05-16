import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity } from "typeorm"

@Entity("staticInfo")
export class StaticInfoEntity extends BaseModel {
    @Column({ type: "varchar", length: 128 })
    address!: string

    @Column({ type: "varchar", length: 16 })
    phoneNumber!: string

    @Column({ type: "varchar", length: 128 })
    workingHours!: string

    @Column({ type: "varchar", length: 64 })
    email!: string
}