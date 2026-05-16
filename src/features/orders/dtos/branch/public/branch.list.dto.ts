// BranchPublicListDto
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

import { BranchType_Enum } from "src/core/enums/branch.enum";

export class BranchPublicListDto {

    @Expose()
    @ApiProperty()
    id!: number

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
    @ApiProperty({ enum: BranchType_Enum })
    branchType!: BranchType_Enum
}