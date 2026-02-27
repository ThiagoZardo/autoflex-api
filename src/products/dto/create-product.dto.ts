import { IsString, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    example: 'Premium Burger',
    description: 'Product name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 50.0,
    description: 'Product unit value',
  })
  @IsNumber()
  @Min(0)
  value: number;
}
