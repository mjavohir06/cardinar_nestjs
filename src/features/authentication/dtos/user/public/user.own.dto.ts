// UserPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@/core/enums/role.enum";

export class UserPublicOwnDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    email!: string

    @Expose()
    @ApiProperty({enum:Role,default:Role.User})
    role!:Role
}