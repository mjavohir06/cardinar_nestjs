import { IsInt, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class PaginationFilters {
  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty({ required: false, default: 1 })
  @Type(() => Number)
  @Transform(({ value }) => value ?? Number(process.env.DEFAULT_PAGE) ?? 1)
  page!: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @ApiProperty({ required: false, default: 20 })
  @Type(() => Number)
  @Transform(({ value }) => value ?? Number(process.env.DEFAULT_SIZE) ?? 20)
  size!: number;
}
