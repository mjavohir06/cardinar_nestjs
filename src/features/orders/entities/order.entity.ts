import { BaseModel } from "src/core/base-model.entity"
import { UserEntity } from "src/features/authentication/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { BranchEntity } from "./branch.entity"
import { PaymentMethod_Enum } from "src/core/enums/paymentMethod.enum"
import { OrderStatus_Enum } from "src/core/enums/orderStatus.enum"
import { OrderItemEntity } from "./orderItem.entity"

@Entity("orders")
export class OrderEntity extends BaseModel {
    @Column()
    userId!: number

    @ManyToOne(() => UserEntity, (user) => user.orders, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId" })
    user?: UserEntity

    @Column()
    branchId!: number

    @ManyToOne(() => BranchEntity, (branch) => branch.orders, { onDelete: "CASCADE" })
    @JoinColumn({ name: "branchId" })
    branch?: BranchEntity

    @Column({ type: "varchar", length: 64 })
    fullName!: string

    @Column({ type: "varchar", length: 16 })
    phoneNumber!: string

    @Column({ type: "varchar", length: 64, nullable: true })
    email?: string

    @Column()
    delivery!: boolean

    @Column({ type: "enum", enum: PaymentMethod_Enum })
    paymentMethod!: PaymentMethod_Enum

    @Column({ type: "enum", enum: OrderStatus_Enum })
    status!: OrderStatus_Enum

    @OneToMany(() => OrderItemEntity, (item) => item.order)
    orderItems?: OrderItemEntity[]
}