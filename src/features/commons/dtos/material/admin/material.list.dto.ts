
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { Expose } from "class-transformer";

export class MaterialAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    description?:string
}