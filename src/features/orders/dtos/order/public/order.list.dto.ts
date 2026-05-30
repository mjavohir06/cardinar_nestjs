// OrderPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentMethod_Enum } from "src/core/enums/paymentMethod.enum";
import { OrderStatus_Enum } from "src/core/enums/orderStatus.enum";

export class OrderPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    branchId!: number

    @Expose()
    @ApiProperty()
    fullName!: string

    @Expose()
    @ApiProperty()
    phoneNumber!: string

    @Expose()
    @ApiProperty({ nullable: true })
    email?: string

    @Expose()
    @ApiProperty()
    delivery!: boolean

    @Expose()
    @ApiProperty({ enum: PaymentMethod_Enum })
    paymentMethod!: PaymentMethod_Enum

    @Expose()
    @ApiProperty({ enum: OrderStatus_Enum })
    status!: OrderStatus_Enum
}