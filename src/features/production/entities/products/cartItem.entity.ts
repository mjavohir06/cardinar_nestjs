import { BaseModel } from "src/core/base-model.entity"
import { ArticulEntity } from "src/features/articuls/entities/articul.entity"
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { ProductEntity } from "./product.entity"

@Entity("cartItems")
export class CartItemEntity extends BaseModel {
    @Column()
    productId!: number

    @ManyToOne(() => ProductEntity, (product) => product.cartItems, { onDelete: "CASCADE" })
    @JoinColumn({ name: "productId" })
    product!: ProductEntity

    @Column()
    articulId!: number

    @ManyToOne(() => ArticulEntity, (articul) => articul.cartItems, { onDelete: "CASCADE" })
    @JoinColumn({ name: "articulId" })
    articul!: ArticulEntity

    @Column({ default: 1 })
    quantity!: number
}