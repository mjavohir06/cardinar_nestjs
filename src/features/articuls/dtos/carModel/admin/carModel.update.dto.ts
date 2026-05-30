// CarModelUpdateDto
import { IsString, IsOptional, IsInt, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class CarModelUpdateDto {
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ required: false, type: "number" })
    carMakeId?: number

    @IsString()
    @IsOptional()
    @MaxLength(64)
    @Transform(({ value }) => value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : value)
    @ApiProperty({ required: false })
    title?: string
}