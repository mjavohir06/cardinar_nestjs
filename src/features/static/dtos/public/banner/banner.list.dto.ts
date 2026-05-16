
import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"





export class BannerPublicListDto {
    @ApiProperty()
    @Expose()
    id!: number

    @ApiProperty()
    @Expose()
    title!: string

    @ApiProperty()
    @Expose()
    link!: string

    @ApiProperty()
    @Expose()
    image!: string;

    @ApiProperty()
    @Expose()
    isActive!: boolean

}