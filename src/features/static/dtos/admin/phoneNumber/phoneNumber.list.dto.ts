
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";


export class PhoneNumberListAdminDto extends BaseModelListDto{
    @Expose()
    @ApiProperty({example:"+998883337889"})
    phoneNumber!: string
}