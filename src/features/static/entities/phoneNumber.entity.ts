import { BaseModel } from "src/core/base-model.entity";
import { Column, Entity } from "typeorm";


@Entity("phoneNumbers")
export class PhoneNumberEntity extends BaseModel {
    @Column({ type: "varchar", length: 16, unique: true })
    phoneNumber!: string
}