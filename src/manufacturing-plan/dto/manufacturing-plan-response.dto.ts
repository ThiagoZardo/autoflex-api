export class ManufacturingProductPlanDto {
  productId: number;
  name: string;
  quantity: number;
  unitValue: number;
  totalValue: number;
}

export class ManufacturingPlanResponseDto {
  products: ManufacturingProductPlanDto[];
  totalProductionValue: number;
}
