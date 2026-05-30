// ProductCreateDto
import { IsString, IsNotEmpty, IsInt, IsOptional, IsNumber, IsBoolean, IsEnum, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { Status_Enum } from "src/core/enums/status.enum";

export class ProductCreateDto {
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    categoryId!: number

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    title!: string

    @IsNumber()
    @Transform(({ value }) => parseFloat(value))
    @ApiProperty({ type: "number", example: 189000 })
    price!: number

    @IsString()
    @IsOptional()
    @ApiProperty({ required: false })
    description?: string

    @IsEnum(Status_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: Status_Enum })
    status?: Status_Enum

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty({ required: false, default: false })
    isPremium?: boolean
}