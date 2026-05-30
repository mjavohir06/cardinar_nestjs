// CartItemAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";

export class CartItemAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    productId!: number

    @Expose()
    @ApiProperty()
    articulId!: number

    @Expose()
    @ApiProperty()
    quantity!: number
}