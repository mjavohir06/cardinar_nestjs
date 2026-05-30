// CarModelCreateDto
import { IsString, IsNotEmpty, IsInt, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class CarModelCreateDto {
    @IsInt()
    @Transform(({ value }) => parseInt(value))
    @ApiProperty({ type: "number" })
    carMakeId!: number

    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @Transform(({ value }) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
    @ApiProperty()
    title!: string
}