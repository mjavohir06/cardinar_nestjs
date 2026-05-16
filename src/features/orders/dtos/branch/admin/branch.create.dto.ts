// BranchCreateDto
import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, MaxLength, IsDecimal, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { BranchType_Enum } from "src/core/enums/branch.enum";
import { Transform } from "class-transformer";
import { IsUzbekPhone } from "@/core/validators/isPhone.check";

export class BranchCreateDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    title!: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty()
    address!: string

    @IsString()
    @IsOptional()
    @MaxLength(64)
    @ApiProperty({ required: false })
    district?: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(64)
    @ApiProperty()
    region!: string

    @IsUzbekPhone()
    @ApiProperty({ example: "+998901234567" })
    phoneNumber!: string

    @IsNumber()
    @Transform(({ value }) => parseFloat(value))
    @ApiProperty({ type: "number", example: 69.240562 })
    longitude!: number

    @IsNumber()
    @Transform(({ value }) => parseFloat(value))
    @ApiProperty({ type: "number", example: 41.299496 })
    latitude!: number

    @IsEnum(BranchType_Enum)
    @ApiProperty({ enum: BranchType_Enum })
    branchType!: BranchType_Enum
}