import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductRawMaterial } from './product-raw-material.entity';
import { Product } from '../products/product.entity';
import { RawMaterial } from '../raw-materials/raw-material.entity';
import { CreateProductRawMaterialDto } from './dto/create-product-raw-material.dto';

@Injectable()
export class ProductRawMaterialsService {
  constructor(
    @InjectRepository(ProductRawMaterial)
    private readonly productRawMaterialRepo: Repository<ProductRawMaterial>,

    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,

    @InjectRepository(RawMaterial)
    private readonly rawMaterialRepo: Repository<RawMaterial>,
  ) {}

  async create(dto: CreateProductRawMaterialDto) {
    const product = await this.productRepo.findOne({
      where: { id: dto.productId },
    });

    if (!product) throw new NotFoundException('Product not found');

    const rawMaterial = await this.rawMaterialRepo.findOne({
      where: { id: dto.rawMaterialId },
    });

    if (!rawMaterial) throw new NotFoundException('Raw material not found');

    const relation = this.productRawMaterialRepo.create({
      product,
      rawMaterial,
      quantityRequired: dto.quantityRequired,
    });

    return this.productRawMaterialRepo.save(relation);
  }

  async findAll() {
    return this.productRawMaterialRepo.find({
      relations: ['product', 'rawMaterial'],
    });
  }

  async remove(id: number) {
    const relation = await this.productRawMaterialRepo.findOne({
      where: { id },
    });

    if (!relation) throw new NotFoundException('Relation not found');

    return this.productRawMaterialRepo.remove(relation);
  }
}
