// CartItemUpdateDto
import { IsInt, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class CartItemUpdateDto {
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    productId?: number

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    articulId?: number

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    quantity?: number
}