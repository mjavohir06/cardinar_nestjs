import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { Type as NestType } from '@nestjs/common';

export interface PaginatedResult<T> {
  totalPages: number;
  currentPage: number;
  nextPage?: number;
  totalCount: number;
  data: T[];
}


export function PaginatedResultDto<T>(Dto: NestType<T>) {
  class PaginatedResultDtoClass implements PaginatedResult<T> {
    @ApiProperty()
    @Expose()
    totalPages!: number;

    @ApiProperty()
    @Expose()
    currentPage!: number;

    @ApiProperty()
    @Expose()
    nextPage?: number;

    @ApiProperty()
    @Expose()
    totalCount!: number;

    @ApiProperty({ type: [Dto] })
    @Expose()
    @Type(() => Dto)
    data!: T[];
  }

  return PaginatedResultDtoClass;
}
