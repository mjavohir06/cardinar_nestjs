
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class MaterialPublicListDto {

    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    description?:string
}