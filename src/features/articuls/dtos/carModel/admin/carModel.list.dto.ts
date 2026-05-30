// CarModelAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";

export class CarModelAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    carMakeId!: number

    @Expose()
    @ApiProperty()
    title!: string
}