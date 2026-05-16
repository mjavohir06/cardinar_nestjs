import { IsLink } from "@/core/validators/isLink.check"
import { ApiProperty } from "@nestjs/swagger"
import { Allow,IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator"




export class BannerUpdateDto {

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @MaxLength(128)
    @ApiProperty({required:false})
    title?: string

    @IsOptional()
    @IsLink()
    @ApiProperty({ example: 'https://example.com' ,required:false})
    link?: string

    @Allow()
    @ApiProperty({ type: 'string', format: 'binary',required:false })
    image?: string;

}