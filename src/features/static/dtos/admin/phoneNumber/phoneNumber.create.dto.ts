import { IsUzbekPhone } from "@/core/validators/isPhone.check";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class PhoneNumberCUDto{
    @IsString()
    @IsNotEmpty()
    @IsUzbekPhone()
    @ApiProperty({example:"+998883337889"})
    phoneNumber!: string
}