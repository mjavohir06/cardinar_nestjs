// PartUpdateDto
import { IsString, IsOptional, IsInt, IsEnum, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { Category_Enum } from "src/core/enums/category.enum";
import { Part_Enum } from "src/core/enums/part.enum";

export class PartUpdateDto {
    @IsEnum(Category_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: Category_Enum })
    category?: Category_Enum

    @IsEnum(Part_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: Part_Enum })
    part?: Part_Enum

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @ApiProperty({ required: false })
    title?: string

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    colorId?: number

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    materialId?: number

    @IsOptional()
    @ApiProperty({ required: false, type: "string", format: "binary" })
    image?: string
}