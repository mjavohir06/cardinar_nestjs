// UserCreateDto
import { IsString, IsNotEmpty, IsBoolean, IsOptional, MaxLength, IsEmail, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { Transform } from "class-transformer";

export class UserCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @ApiProperty()
    fullName!: string

    @IsUzbekPhone()
    @ApiProperty({ example: "+998901234567" })
    phoneNumber!: string

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