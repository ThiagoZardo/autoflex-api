import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  create(dto: CreateProductDto): Promise<Product> {
    const product = this.repository.create(dto);
    return this.repository.save(product);
  }

  async findAll() {
    return this.repository.find({
      relations: {
        productRawMaterials: {
          rawMaterial: true,
        },
      },
    });
  }

  findOne(id: number): Promise<Product | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['productRawMaterials'],
    });
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product | null> {
    await this.repository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ deleted: true } | null> {
    await this.repository.delete(id);
    return { deleted: true };
  }
}
