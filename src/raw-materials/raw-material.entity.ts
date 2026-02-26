import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductRawMaterial } from '../product-raw-materials/product-raw-material.entity';

@Entity('raw_materials')
export class RawMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'int', default: 0 })
  stockQuantity: number;

  @OneToMany(() => ProductRawMaterial, (pr) => pr.rawMaterial)
  products: ProductRawMaterial[];
}
