import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ProductEntity } from "../../production/entities/products/product.entity";
import { CarModelEntity } from "./carModel.entity";
import { CartItemEntity } from "src/features/production/entities/products/cartItem.entity";
import { OrderItemEntity } from "src/features/orders/entities/orderItem.entity";



@Entity("articuls")
export class ArticulEntity extends BaseModel {
    @Column()
    productId!: number

    @ManyToOne(() => ProductEntity, (product) => product.articuls, { onDelete: "CASCADE" })
    @JoinColumn({ name: "productId" })
    product!: ProductEntity

    @Column()
    carModelId!: number

    @ManyToOne(() => CarModelEntity, (carModel) => carModel.articuls, { onDelete: "CASCADE" })
    @JoinColumn({ name: "carModelId" })
    carModel!: CarModelEntity

    @OneToMany(() => CartItemEntity, (item) => item.articul)
    cartItems?: CartItemEntity[]

    @OneToMany(() => OrderItemEntity, (item) => item.articul)
    orderItems?: OrderItemEntity[]
}