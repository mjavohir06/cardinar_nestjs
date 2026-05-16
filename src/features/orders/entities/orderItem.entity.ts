import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { OrderEntity } from "./order.entity"
import { ProductEntity } from "src/features/production/entities/products/product.entity"
import { ArticulEntity } from "src/features/articuls/entities/articul.entity"

@Entity("orderItems")
export class OrderItemEntity extends BaseModel {
    @Column()
    orderId!: number

    @ManyToOne(() => OrderEntity, (order) => order.orderItems, { onDelete: "CASCADE" })
    @JoinColumn({ name: "orderId" })
    order?: OrderEntity

    @Column()
    productId!: number

    @ManyToOne(() => ProductEntity, (product) => product.orderItems, { onDelete: "CASCADE" })
    @JoinColumn({ name: "productId" })
    product?: ProductEntity

    @Column()
    articulId!: number

    @ManyToOne(() => ArticulEntity, (articul) => articul.orderItems, { onDelete: "CASCADE" })
    @JoinColumn({ name: "articulId" })
    articul?: ArticulEntity

    @Column({ default: 1 })
    quantity!: number
}