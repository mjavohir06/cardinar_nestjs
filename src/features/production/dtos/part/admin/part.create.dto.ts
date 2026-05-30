// PartCreateDto
import { IsString, IsNotEmpty, IsInt, IsEnum, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { Category_Enum } from "src/core/enums/category.enum";
import { Part_Enum } from "src/core/enums/part.enum";

export class PartCreateDto {
    @IsEnum(Category_Enum)
    @ApiProperty({ enum: Category_Enum })
    category!: Category_Enum

    @IsEnum(Part_Enum)
    @ApiProperty({ enum: Part_Enum })
    part!: Part_Enum

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    title!: string

    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    colorId!: number

    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    materialId!: number

    @ApiProperty({ type: "string", format: "binary" })
    image!: string
}