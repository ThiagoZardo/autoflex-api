import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRawMaterial } from './product-raw-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRawMaterial])],
  exports: [TypeOrmModule],
})
export class ProductRawMaterialsModule {}
