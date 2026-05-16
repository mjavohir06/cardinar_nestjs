
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class StaticInfoPublicListDto {

    @Expose()
    @ApiProperty()
    id!:number

    @Expose()
    @ApiProperty({ example: "+998883337889" })
    phoneNumber!: string

    @Expose()
    @ApiProperty()
    address!: string

    @Expose()
    @ApiProperty()
    workingHours!: string

    @Expose()
    @ApiProperty()
    email!: string
}