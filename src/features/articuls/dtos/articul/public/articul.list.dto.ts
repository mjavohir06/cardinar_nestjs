// ArticulPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ArticulPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    productId!: number

    @Expose()
    @ApiProperty()
    carModelId!: number
}