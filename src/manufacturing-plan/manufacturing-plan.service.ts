import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../products/product.entity';
import { RawMaterial } from '../raw-materials/raw-material.entity';

@Injectable()
export class ManufacturingPlanService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(RawMaterial)
    private readonly rawMaterialRepository: Repository<RawMaterial>,
  ) {}

  async getManufacturingPlan() {
    const products = await this.productRepository.find({
      relations: ['productRawMaterials', 'productRawMaterials.rawMaterial'],
    });

    const rawMaterials = await this.rawMaterialRepository.find();

    const stockMap = new Map<number, number>();
    rawMaterials.forEach((rm) => {
      stockMap.set(rm.id, rm.stockQuantity);
    });

    // Prioridade por maior valor
    products.sort((a, b) => b.value - a.value);

    const result: Array<{
      productId: number;
      name: string;
      quantity: number;
      unitValue: number;
      totalValue: number;
    }> = [];
    let totalProductionValue = 0;

    for (const product of products) {
      let maxQuantity = Infinity;

      for (const prm of product.productRawMaterials) {
        const stock = stockMap.get(prm.rawMaterial.id) ?? 0;
        const possible = Math.floor(stock / prm.quantityRequired);
        maxQuantity = Math.min(maxQuantity, possible);
      }

      if (maxQuantity > 0 && maxQuantity !== Infinity) {
        for (const prm of product.productRawMaterials) {
          const currentStock = stockMap.get(prm.rawMaterial.id)!;

          stockMap.set(
            prm.rawMaterial.id,
            currentStock - prm.quantityRequired * maxQuantity,
          );
        }

        result.push({
          productId: product.id,
          name: product.name,
          quantity: maxQuantity,
          unitValue: product.value,
          totalValue: maxQuantity * product.value,
        });

        totalProductionValue += maxQuantity * product.value;
      }
    }

    return {
      products: result,
      totalProductionValue,
    };
  }
}
