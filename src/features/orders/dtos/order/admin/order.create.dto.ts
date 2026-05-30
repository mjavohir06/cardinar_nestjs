// OrderCreateDto
import { IsString, IsNotEmpty, IsBoolean, IsOptional, IsEnum, IsInt, MaxLength, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { Transform } from "class-transformer";
import { PaymentMethod_Enum } from "src/core/enums/paymentMethod.enum";
import { OrderStatus_Enum } from "src/core/enums/orderStatus.enum";

export class OrderCreateDto {
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    branchId!: number

    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @ApiProperty()
    fullName!: string

    @IsUzbekPhone()
    @ApiProperty({ example: "+998901234567" })
    phoneNumber!: string

    @IsEmail()
    @IsOptional()
    @ApiProperty({ required: false, example: "example@gmail.com" })
    email?: string

    @IsBoolean()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty()
    delivery!: boolean

    @IsEnum(PaymentMethod_Enum)
    @ApiProperty({ enum: PaymentMethod_Enum })
    paymentMethod!: PaymentMethod_Enum

    @IsEnum(OrderStatus_Enum)
    @IsOptional()
    @ApiProperty({ enum: OrderStatus_Enum, required: false, default: OrderStatus_Enum.PROCESSING })
    status?: OrderStatus_Enum
}