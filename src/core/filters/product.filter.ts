import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationFilters } from './pagination.filters';
import { Transform, Type } from 'class-transformer';


export class ProductFilters extends PaginationFilters {
    @IsInt()
    @IsOptional()
    @Type(() => Number)
    @Transform(({ value }) => value ?? Number(process.env.DEFAULT_PAGE) ?? 1)
    @ApiProperty({ required: false })
    colorId?: number

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    @Transform(({ value }) => value ?? Number(process.env.DEFAULT_PAGE) ?? 1)
    @ApiProperty({ required: false })
    categoryId?: number
}