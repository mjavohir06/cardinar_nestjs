import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ProductImageDto {
  @Expose()
  @ApiProperty({ example: 1 })
  id!: number;

  @Expose()
  @ApiProperty({
    example:
      'http://localhost:8888/uploads/image/image_1780216140066.jpg',
  })
  image!: string;

  @Expose()
  @ApiProperty({ example: 1 })
  position!: number;
}

export class ProductDetailDto {
  @Expose()
  @ApiProperty({ example: 1 })
  id!: number;

  @Expose()
  @ApiProperty({ example: 'string' })
  title!: string;

  @Expose()
  @ApiProperty({ example: '189000.00' })
  price!: string;

  @Expose()
  @ApiProperty({ example: 'string' })
  description!: string;

  @Expose()
  @ApiProperty({ example: 'new' })
  status!: string;

  @Expose()
  @ApiProperty({ example: true })
  isPremium!: boolean;

  @Expose()
  @Type(() => ProductImageDto)
  @ApiProperty({
    type: () => [ProductImageDto],
  })
  images!: ProductImageDto[];
}