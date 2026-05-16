import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class StaticInfoCreateDto {
    @IsString()
    @IsNotEmpty()
    @IsUzbekPhone()
    @ApiProperty({ example: "+998883337889" })
    phoneNumber!: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    address!: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    workingHours!: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email!: string
}