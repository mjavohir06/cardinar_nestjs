import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ProductEntity } from "../products/product.entity";


@Entity("Images")
export class ImageEntity extends BaseModel{
    @Column()
    productId!:number

    @ManyToOne(() => ProductEntity, (product) => product.images, { onDelete: "CASCADE" })
    @JoinColumn({ name: "productId" })
    product?: ProductEntity

    @Column()
    image!:string

    @Column()
    position!:number
}