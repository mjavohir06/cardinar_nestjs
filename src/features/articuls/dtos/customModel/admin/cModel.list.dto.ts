// CustomModelAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { Category_Enum } from "src/core/enums/category.enum";

export class CustomModelAdminListDto extends BaseModelListDto {
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