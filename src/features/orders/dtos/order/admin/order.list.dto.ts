// OrderAdminListDto
import { Expose, Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { PaymentMethod_Enum } from "src/core/enums/paymentMethod.enum";
import { OrderStatus_Enum } from "src/core/enums/orderStatus.enum";

export class OrderAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    userId!: number

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