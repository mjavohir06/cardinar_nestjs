// CustomModelUpdateDto
import { IsString, IsOptional, IsEnum, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Category_Enum } from "src/core/enums/category.enum";

export class CustomModelUpdateDto {
    @IsEnum(Category_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: Category_Enum })
    category?: Category_Enum

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @ApiProperty({ required: false })
    title?: string

    @IsOptional()
    @ApiProperty({ required: false, type: "string", format: "binary" })
    image?: string
}