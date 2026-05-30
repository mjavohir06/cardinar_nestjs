// BranchCreateDto
import { IsString, MaxLength,  IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ColorCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @ApiProperty()
    title!: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(12)
    @ApiProperty()
    color!:string

}