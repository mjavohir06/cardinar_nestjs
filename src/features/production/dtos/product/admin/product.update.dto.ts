// ProductUpdateDto
import { IsString, IsInt, IsOptional, IsNumber, IsBoolean, IsEnum, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { Status_Enum } from "src/core/enums/status.enum";

export class ProductUpdateDto {
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    categoryId?: number

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @ApiProperty({ required: false })
    title?: string

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => value ? parseFloat(value) : undefined)
    @ApiProperty({ required: false, type: "number", example: 189000 })
    price?: number

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
    @ApiProperty({ required: false })
    isPremium?: boolean
}