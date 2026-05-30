// ImageCreateDto
import { IsInt, IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class ImageCreateDto {
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    productId!: number

    @ApiProperty({ type: "string", format: "binary" })
    image!: string

    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    position!: number
}