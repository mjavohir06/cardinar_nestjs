// CarModelPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CarModelPublicListDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    carMakeId!: number

    @Expose()
    @ApiProperty()
    title!: string
}