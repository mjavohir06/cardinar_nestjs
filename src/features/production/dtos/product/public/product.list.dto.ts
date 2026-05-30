// ProductPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Status_Enum } from "src/core/enums/status.enum";

export class ProductPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

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
    @ApiProperty({ nullable: true, enum: Status_Enum })
    status?: Status_Enum

    @Expose()
    @ApiProperty()
    isPremium!: boolean
}