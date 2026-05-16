// BranchAdminListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { BranchType_Enum } from "src/core/enums/branch.enum";
import { BaseModelListDto } from "@/core/base-model.list.dto";

export class BranchAdminListDto extends BaseModelListDto {
    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    address!: string

    @Expose()
    @ApiProperty({ nullable: true })
    district?: string

    @Expose()
    @ApiProperty()
    region!: string

    @Expose()
    @ApiProperty()
    phoneNumber!: string

    @Expose()
    @ApiProperty()
    longitude!: number

    @Expose()
    @ApiProperty()
    latitude!: number

    @Expose()
    @ApiProperty()
    isActive!: boolean

    @Expose()
    @ApiProperty({ enum: BranchType_Enum })
    branchType!: BranchType_Enum
}