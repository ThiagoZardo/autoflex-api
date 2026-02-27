import { PartialType } from '@nestjs/mapped-types';
import { CreateRawMaterialDto } from './create-raw-material.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRawMaterialDto extends PartialType(CreateRawMaterialDto) {
  @ApiProperty({
    example: 'Flour',
    description: 'Raw material name',
  })
  name?: string;

  @ApiProperty({
    example: 100,
    description: 'Stock quantity available',
  })
  stockQuantity?: number;
}
