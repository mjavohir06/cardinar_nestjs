// OrderItemPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class OrderItemPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

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