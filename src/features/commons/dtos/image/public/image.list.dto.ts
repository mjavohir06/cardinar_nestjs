// ImagePublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ImagePublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    image!: string

    @Expose()
    @ApiProperty()
    position!: number
}