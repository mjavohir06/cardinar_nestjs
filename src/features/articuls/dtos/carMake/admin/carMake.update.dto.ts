// CarMakeUpdateDto
import { IsString, IsOptional, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class CarMakeUpdateDto {
    @IsString()
    @IsOptional()
    @MaxLength(64)
    @Transform(({ value }) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
    @ApiProperty({ required: false })
    title?: string
}