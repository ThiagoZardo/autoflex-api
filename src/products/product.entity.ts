import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductRawMaterial } from '../product-raw-materials/product-raw-material.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  value: number;

  @OneToMany(() => ProductRawMaterial, (prm) => prm.product)
  productRawMaterials: ProductRawMaterial[];
}
