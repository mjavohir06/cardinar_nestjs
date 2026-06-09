import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ProductPublicPremiumDto {
    @Expose()
    @ApiProperty()
    id!: number

    @Expose()
    @ApiProperty()
    title!: string

    @Expose()
    @ApiProperty()
    isPremium!: boolean

    @Expose()
    @ApiProperty()
    image?: string
}