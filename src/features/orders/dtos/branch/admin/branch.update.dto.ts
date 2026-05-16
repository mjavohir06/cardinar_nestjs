// BranchUpdateDto
import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

import { BranchType_Enum } from "src/core/enums/branch.enum";
import { Transform } from "class-transformer";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";

export class BranchUpdateDto {
    @IsString()
    @IsOptional()
    @MaxLength(128)
    @ApiProperty({ required: false })
    title?: string

    @IsString()
    @IsOptional()
    @MaxLength(128)
    @ApiProperty({ required: false })
    address?: string

    @IsString()
    @IsOptional()
    @MaxLength(64)
    @ApiProperty({ required: false })
    district?: string

    @IsString()
    @IsOptional()
    @MaxLength(64)
    @ApiProperty({ required: false })
    region?: string

    @IsUzbekPhone()
    @IsOptional()
    @ApiProperty({ required: false, example: "+998901234567" })
    phoneNumber?: string

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @ApiProperty({ required: false, type: "number", example: 69.240562 })
    longitude?: number

    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseFloat(value))
    @ApiProperty({ required: false, type: "number", example: 41.299496 })
    latitude?: number

    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === "true" || value === true)
    @ApiProperty({ required: false })
    isActive?: boolean

    @IsEnum(BranchType_Enum)
    @IsOptional()
    @ApiProperty({ required: false, enum: BranchType_Enum })
    branchType?: BranchType_Enum
}