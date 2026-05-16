import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { CategoryEntity } from "../categories/category.entity";
import { ColorEntity } from "../productColor/color.entity";
import { Status_Enum } from "src/core/enums/status.enum";
import { ImageEntity } from "../images/image.entity";
import { ArticulEntity } from "src/features/articuls/entities/articul.entity";
import { CartItemEntity } from "./cartItem.entity";
import { OrderItemEntity } from "src/features/orders/entities/orderItem.entity";

// product.entity.ts
@Entity("products")
export class ProductEntity extends BaseModel {
    @Column()
    categoryId!: number

    @ManyToOne(() => CategoryEntity, (category) => category.products, { onDelete: "CASCADE" })
    @JoinColumn({ name: "categoryId" })
    category!: CategoryEntity

    @Column({ type: "varchar", length: 128, unique: true })
    title!: string

    @Column({ type: "decimal", precision: 12, scale: 2 })
    price!: number

    @Column({ type: "text", nullable: true })
    description?: string

    @Column({ type: "enum", enum: Status_Enum, nullable: true })
    status?: Status_Enum

    @Column({ default: false })
    isPremium!: boolean

    @OneToMany(() => ImageEntity, (image) => image.product)
    images?: ImageEntity[]

    @OneToMany(() => ArticulEntity, (articul) => articul.product)
    articuls?: ArticulEntity[]

    @OneToMany(() => ColorEntity, (pc) => pc.products)
    @JoinTable()
    productColors?: ColorEntity[]

    @OneToMany(() => CartItemEntity, (item) => item.product)
    cartItems?: CartItemEntity[]

    @OneToMany(() => OrderItemEntity, (item) => item.product)
    orderItems?: OrderItemEntity[]
}