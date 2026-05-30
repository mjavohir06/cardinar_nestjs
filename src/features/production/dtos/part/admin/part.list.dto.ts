// PartAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { Category_Enum } from "src/core/enums/category.enum";
import { Part_Enum } from "src/core/enums/part.enum";

export class PartAdminListDto extends BaseModelListDto {
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