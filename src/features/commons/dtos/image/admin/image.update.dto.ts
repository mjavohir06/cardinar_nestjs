// ImageUpdateDto
import { Allow, IsInt, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class ImageUpdateDto {
    @IsOptional()
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    productId?: number

    @IsOptional()
    @Allow()
    @ApiProperty({ type: "string", format: "binary", required: false })
    image?: string

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    position?: number
}