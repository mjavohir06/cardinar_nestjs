import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity, OneToMany } from "typeorm"
import { RequestEntity } from "./request.entity"
import { OrderEntity } from "src/features/orders/entities/order.entity"
import { Role } from "@/core/enums/role.enum"

// user.entity.ts
@Entity("users")
export class UserEntity extends BaseModel {
    @Column({ type: "varchar", length: 64 })
    fullName!: string

    @Column({ type: "varchar", length: 16, unique: true })
    phoneNumber!: string

    @Column({ type: "varchar", length: 64, unique: true })
    email!: string

    @Column({ type: "varchar", length: 128 })
    password!: string

    @Column({ enum:Role,default:Role.User })
    role!:Role

    @Column({ default: false })
    isActive!:boolean

    @OneToMany(() => RequestEntity, (request) => request.user)
    requests?: RequestEntity[]

    @OneToMany(() => OrderEntity, (order) => order.user)
    orders?: OrderEntity[]
}