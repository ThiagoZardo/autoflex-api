import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RawMaterial } from './raw-material.entity';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';

@Injectable()
export class RawMaterialsService {
  constructor(
    @InjectRepository(RawMaterial)
    private readonly rawMaterialRepository: Repository<RawMaterial>,
  ) {}

  async create(createDto: CreateRawMaterialDto): Promise<RawMaterial> {
    const rawMaterial = this.rawMaterialRepository.create(createDto);
    return this.rawMaterialRepository.save(rawMaterial);
  }

  async findAll(): Promise<RawMaterial[]> {
    return this.rawMaterialRepository.find();
  }

  async findOne(id: number): Promise<RawMaterial> {
    const rawMaterial = await this.rawMaterialRepository.findOne({
      where: { id },
    });

    if (!rawMaterial) {
      throw new NotFoundException('Raw material not found');
    }

    return rawMaterial;
  }

  async update(
    id: number,
    updateDto: Partial<CreateRawMaterialDto>,
  ): Promise<RawMaterial> {
    const rawMaterial = await this.findOne(id);

    Object.assign(rawMaterial, updateDto);

    return this.rawMaterialRepository.save(rawMaterial);
  }

  async remove(id: number): Promise<void> {
    const rawMaterial = await this.findOne(id);
    await this.rawMaterialRepository.remove(rawMaterial);
  }
}
