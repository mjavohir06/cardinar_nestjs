// BranchCreateDto
import { IsString, MaxLength,  IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CategoryCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    title!: string

}