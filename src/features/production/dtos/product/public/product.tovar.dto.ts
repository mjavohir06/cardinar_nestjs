// ProductPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ProductPublicTovarDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    price!: number

    @Expose()
    @ApiProperty()
    image?:string
}