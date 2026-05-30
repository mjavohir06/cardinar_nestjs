// CustomModelCreateDto
import { IsString, IsNotEmpty, IsEnum, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Category_Enum } from "src/core/enums/category.enum";

export class CustomModelCreateDto {
    @IsEnum(Category_Enum)
    @ApiProperty({ enum: Category_Enum })
    category!: Category_Enum

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    title!: string

    @ApiProperty({ type: "string", format: "binary" })
    image!: string
}