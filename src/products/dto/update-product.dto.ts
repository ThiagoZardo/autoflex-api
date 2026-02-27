import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    example: 'Premium Burger',
    description: 'Product name',
  })
  name?: string;

  @ApiProperty({
    example: 50.0,
    description: 'Product unit value',
  })
  value?: number;
}
