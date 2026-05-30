import { IsString, MaxLength,  IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ColorUpdateDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty({required:false})
    title?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @ApiProperty({required:false})
    color?:string
}