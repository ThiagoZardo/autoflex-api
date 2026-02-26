import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Product } from 'src/products/product.entity';
import { RawMaterial } from 'src/raw-materials/raw-material.entity';

@Entity('product_raw_materials')
export class ProductRawMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.productRawMaterials, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => RawMaterial, (rm) => rm.products, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'raw_material_id' })
  rawMaterial: RawMaterial;

  @Column({ type: 'int' })
  quantityRequired: number;
}
