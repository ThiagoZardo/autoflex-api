import { IsString, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRawMaterialDto {
  @ApiProperty({
    example: 'Flour',
    description: 'Raw material name',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 100,
    description: 'Stock quantity available',
  })
  @IsInt()
  @Min(0)
  stockQuantity: number;
}
