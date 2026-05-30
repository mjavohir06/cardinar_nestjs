// CarMakeCreateDto
import { IsString, IsNotEmpty, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class CarMakeCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @Transform(({ value }) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
    @ApiProperty()
    title!: string
}