import { IsString, MaxLength,  IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class MaterialUpdateDto {
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
    description?:string
}