// CustomProductPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Category_Enum } from "src/core/enums/category.enum";

export class CustomProductPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    fullName!: string

    @Expose()
    @ApiProperty()
    phoneNumber!: string

    @Expose()
    @ApiProperty({ nullable: true })
    email?: string

    @Expose()
    @ApiProperty()
    carMakeId!: number

    @Expose()
    @ApiProperty()
    carModelId!: number

    @Expose()
    @ApiProperty({ enum: Category_Enum })
    category!: Category_Enum

    @Expose()
    @ApiProperty()
    modelId!: number

    @Expose()
    @ApiProperty()
    withLogo!: boolean

    @Expose()
    @ApiProperty()
    image!: string
}