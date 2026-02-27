import { IsInt, Min } from 'class-validator';

export class CreateProductRawMaterialDto {
  @IsInt()
  productId: number;

  @IsInt()
  rawMaterialId: number;

  @IsInt()
  @Min(1)
  quantityRequired: number;
}
