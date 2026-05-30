// CustomModelPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Category_Enum } from "src/core/enums/category.enum";

export class CustomModelPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty({ enum: Category_Enum })
    category!: Category_Enum

    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    image!: string
}