import { Module } from '@nestjs/common';
import { ManufacturingPlanService } from './manufacturing-plan.service';
import { ManufacturingPlanController } from './manufacturing-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/products/product.entity';
import { RawMaterial } from 'src/raw-materials/raw-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, RawMaterial])],
  controllers: [ManufacturingPlanController],
  providers: [ManufacturingPlanService],
})
export class ManufacturingPlanModule {}
