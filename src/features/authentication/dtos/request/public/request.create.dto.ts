import { IsString, IsNotEmpty, MaxLength, IsEmail, IsOptional} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";

export class RequestCreateDto {
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

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(2000)
    @ApiProperty()
    comments?: string
}