import { IsString, MaxLength,  IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CategoryUpdateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    title!: string

}