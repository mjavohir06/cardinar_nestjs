import { IsString, MaxLength,  IsNotEmpty, IsOptional, IsHexColor } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ColorUpdateDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty({required:false})
    title?: string

    @IsOptional()
    @IsHexColor()
    @ApiProperty({required:false})
    color?:string
}