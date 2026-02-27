import { IsString, IsInt, Min } from 'class-validator';

export class CreateRawMaterialDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  stockQuantity: number;
}
