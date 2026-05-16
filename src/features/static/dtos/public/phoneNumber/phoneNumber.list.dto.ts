import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class PhoneNumberListPublicDto{

    @Expose()
    @ApiProperty()
    id!:number

    @Expose()
    @ApiProperty({example:"+998883337889"})
    phoneNumber!: string
}