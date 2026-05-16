import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"





export class SocialLinkPublicListDto {
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
    icon!: string;



}