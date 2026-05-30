// PartPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Category_Enum } from "src/core/enums/category.enum";
import { Part_Enum } from "src/core/enums/part.enum";

export class PartPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty({ enum: Category_Enum })
    category!: Category_Enum

    @Expose()
    @ApiProperty({ enum: Part_Enum })
    part!: Part_Enum

    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    colorId!: number

    @Expose()
    @ApiProperty()
    materialId!: number

    @Expose()
    @ApiProperty()
    image!: string
}