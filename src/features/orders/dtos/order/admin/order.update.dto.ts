// OrderUpdateDto
import { IsString, IsBoolean, IsOptional, IsEnum, IsInt, MaxLength, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { Transform } from "class-transformer";
import { PaymentMethod_Enum } from "src/core/enums/paymentMethod.enum";
import { OrderStatus_Enum } from "src/core/enums/orderStatus.enum";

export class OrderUpdateDto {
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    branchId?: number

    @IsString()
    @IsOptional()
    @MaxLength(64)
    @ApiProperty({ required: false })
    fullName?: string

    @IsUzbekPhone()
    @IsOptional()
    @ApiProperty({ required: false, example: "+998901234567" })
    phoneNumber?: string

    @IsEmail()
    @IsOptional()
    @ApiProperty({ required: false, example: "example@gmail.com" })
    email?: string

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty({ required: false })
    delivery?: boolean

    @IsEnum(PaymentMethod_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: PaymentMethod_Enum })
    paymentMethod?: PaymentMethod_Enum

    @IsEnum(OrderStatus_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: OrderStatus_Enum })
    status?: OrderStatus_Enum
}