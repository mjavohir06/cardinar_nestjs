// CustomProductCreateDto
import { IsString, IsNotEmpty, IsInt, IsOptional, IsBoolean, IsEnum, MaxLength, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { Category_Enum } from "src/core/enums/category.enum";

export class CustomProductCreateDto {
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

    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    carMakeId!: number

    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    carModelId!: number

    @IsEnum(Category_Enum)
    @ApiProperty({ enum: Category_Enum })
    category!: Category_Enum

    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    modelId!: number

    @IsBoolean()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty()
    withLogo!: boolean

    @ApiProperty({ type: "string", format: "binary" })
    image!: string

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty({ required: false, default: true })
    isActive?: boolean
}