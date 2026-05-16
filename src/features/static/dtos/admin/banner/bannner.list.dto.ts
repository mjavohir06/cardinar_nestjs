import { BaseModelListDto } from "@/core/base-model.list.dto"
import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"





export class BannerAdminListDto extends BaseModelListDto {

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
    isActive!:boolean

}