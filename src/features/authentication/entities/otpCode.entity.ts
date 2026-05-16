import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { UserEntity } from "./user.entity"

@Entity("otpCodes")
export class OtpCodeEntity extends BaseModel {
    @Column({ nullable: true })
    userId?: number

    @ManyToOne(() => UserEntity, (user) => user.requests, { onDelete: "SET NULL", nullable: true })
    @JoinColumn({ name: "userId" })
    user?: UserEntity

    @Column({ type: "varchar" })
    code!: string
    
}