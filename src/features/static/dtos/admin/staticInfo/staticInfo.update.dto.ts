import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class StaticInfoUpdateDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsUzbekPhone()
    @ApiProperty({ example: "+998883337889" })
    phoneNumber?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    address?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    workingHours?: string

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email?: string
}