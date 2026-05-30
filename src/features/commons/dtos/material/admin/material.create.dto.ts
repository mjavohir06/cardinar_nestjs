// BranchCreateDto
import { IsString, MaxLength,  IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class MaterialCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @ApiProperty()
    title!: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @ApiProperty({required:false})
    description?:string

}