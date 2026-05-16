import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PaginationFilters } from './pagination.filters';


export class SearchFilters extends PaginationFilters {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  search?: string
}