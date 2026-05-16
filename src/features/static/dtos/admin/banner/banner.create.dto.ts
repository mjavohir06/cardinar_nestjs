import { IsLink } from "@/core/validators/isLink.check"
import { ApiProperty } from "@nestjs/swagger"
import { Allow,IsNotEmpty, IsString, MaxLength } from "class-validator"




export class BannerCreateDto {

    @IsString()
    @MaxLength(128)
    @ApiProperty()
    @IsNotEmpty()
    title!: string

    @IsLink()
    @ApiProperty({ example: 'https://example.com' })
    link!: string

    @Allow()
    @ApiProperty({ type: 'string', format: 'binary' })
    image!: string;

}