// CustomProductUpdateDto
import { IsString, IsInt, IsOptional, IsBoolean, IsEnum, MaxLength, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { Category_Enum } from "src/core/enums/category.enum";

export class CustomProductUpdateDto {
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

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    carMakeId?: number

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    carModelId?: number

    @IsEnum(Category_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: Category_Enum })
    category?: Category_Enum

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    modelId?: number

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty({ required: false })
    withLogo?: boolean

    @IsOptional()
    @ApiProperty({ required: false, type: "string", format: "binary" })
    image?: string

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty({ required: false })
    isActive?: boolean
}