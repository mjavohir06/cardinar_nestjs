// ImageAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";

export class ImageAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    productId!: number

    @Expose()
    @ApiProperty()
    image!: string

    @Expose()
    @ApiProperty()
    position!: number
}