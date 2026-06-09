// BranchCreateDto
import { IsString, MaxLength,  IsNotEmpty, IsHexColor } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ColorCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @ApiProperty()
    title!: string

    @IsHexColor()
    @ApiProperty()
    color!:string

}