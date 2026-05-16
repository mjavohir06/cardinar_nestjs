// UserCreateDto
import { IsString, IsNotEmpty, MaxLength, IsEmail, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserSingInDto {

    @IsEmail()
    @ApiProperty({ example: "example@gmail.com" })
    email!: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @MinLength(6)
    @ApiProperty()
    password!: string
}