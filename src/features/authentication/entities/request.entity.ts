import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { UserEntity } from "./user.entity"

@Entity("requests")
export class RequestEntity extends BaseModel {
    @Column({ nullable: true })
    userId?: number

    @ManyToOne(() => UserEntity, (user) => user.requests, { onDelete: "SET NULL", nullable: true })
    @JoinColumn({ name: "userId" })
    user?: UserEntity

    @Column({ type: "varchar", length: 64 })
    fullName!: string

    @Column({ type: "varchar", length: 16 })
    phoneNumber!: string

    @Column({ type: "varchar", length: 64, nullable: true })
    email?: string

    @Column({ type: "varchar", length: 2000, nullable: true })
    comments?: string
}