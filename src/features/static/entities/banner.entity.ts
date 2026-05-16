import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity } from "typeorm"

@Entity("banners")
export class BannerEntity extends BaseModel {
    @Column({ type: "varchar", length: 128 })
    title!: string

    @Column({ type: "varchar", length: 256 })
    image!: string

    @Column()
    link!:string

    @Column({default:true})
    isActive!: boolean
}