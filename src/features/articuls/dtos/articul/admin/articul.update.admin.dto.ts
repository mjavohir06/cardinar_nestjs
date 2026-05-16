import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import {IsInt, IsOptional} from "class-validator"

export class ArticulUpdateAdmin {
    @Expose()
    @ApiProperty()
    @IsInt()
    @IsOptional()
    productId?:number

    @Expose()
    @ApiProperty()
    @IsInt()
    @IsOptional()
    carModelId?:number
}