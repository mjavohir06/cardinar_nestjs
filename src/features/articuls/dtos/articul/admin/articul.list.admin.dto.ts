import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { BaseModelListDto } from "src/core/base-model.list.dto";

export class ArticulListAdmin extends BaseModelListDto {
    @Expose()
    @ApiProperty({example:1})
    productId!:number

    @Expose()
    @ApiProperty({example:1})
    carModelId!:number

    //davomi bor...
}