// ProductAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { Status_Enum } from "src/core/enums/status.enum";

export class ProductAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    categoryId!: number

    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    price!: number

    @Expose()
    @ApiProperty({ nullable: true })
    description?: string

    @Expose()
    @ApiProperty({ nullable: true, enum: Status_Enum })
    status?: Status_Enum

    @Expose()
    @ApiProperty()
    isPremium!: boolean
}