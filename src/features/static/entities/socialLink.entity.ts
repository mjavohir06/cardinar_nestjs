import { BaseModel } from "src/core/base-model.entity"
import { Column, Entity } from "typeorm"

// social-link.entity.ts
@Entity("socialLinks")
export class SocialLinkEntity extends BaseModel {
    @Column({ type: "varchar", length: 64 })
    title!: string

    @Column({ type: "varchar", length: 256, unique: true })
    link!: string

    @Column({ type: "varchar", length: 128 })
    icon!: string
}