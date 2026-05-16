import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import {IsInt, IsNotEmpty} from "class-validator"

export class ArticulCreateAdmin {
    @Expose()
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    productId!:number

    @Expose()
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    carModelId!:number
}