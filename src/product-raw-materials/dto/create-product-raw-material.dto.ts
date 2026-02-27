import { IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductRawMaterialDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  productId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  rawMaterialId: number;

  @ApiProperty({
    example: 3,
    description: 'Quantity required to manufacture one unit of product',
  })
  @IsInt()
  @Min(1)
  quantityRequired: number;
}
