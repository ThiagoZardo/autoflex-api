import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RawMaterial } from './raw-material.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RawMaterial])],
})
export class RawMaterialsModule {}
