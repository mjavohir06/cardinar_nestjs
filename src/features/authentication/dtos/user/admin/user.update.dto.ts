// UserUpdateDto
import { IsString, IsOptional, IsBoolean, MaxLength, IsEmail, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";

import { Transform } from "class-transformer";

export class UserUpdateDto {
    @IsString()
    @IsOptional()
    @MaxLength(64)
    @ApiProperty({ required: false })
    fullName?: string

    @IsUzbekPhone()
    @IsOptional()
    @ApiProperty({ required: false, example: "+998901234567" })
    phoneNumber?: string

    @IsEmail()
    @IsOptional()
    @ApiProperty({ required: false, example: "example@gmail.com" })
    email?: string

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @MinLength(6)
    @ApiProperty({ required: false })
    password?: string

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty({ required: false })
    isAdmin?: boolean
}