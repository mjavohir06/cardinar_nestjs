
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { Expose } from "class-transformer";

export class ColorAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    color!:string
}