// UserAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModelListDto } from "@/core/base-model.list.dto";
import { Role } from "@/core/enums/role.enum";

export class UserAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    fullName!: string

    @Expose()
    @ApiProperty()
    phoneNumber!: string

    @Expose()
    @ApiProperty()
    email!: string

    @Expose()
    @ApiProperty()
    role!: Role
}