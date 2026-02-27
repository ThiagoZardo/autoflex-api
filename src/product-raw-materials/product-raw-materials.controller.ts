import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductRawMaterialsService } from './product-raw-materials.service';
import { CreateProductRawMaterialDto } from './dto/create-product-raw-material.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ProductRawMaterials')
@Controller('product-raw-materials')
export class ProductRawMaterialsController {
  constructor(
    private readonly productRawMaterialsService: ProductRawMaterialsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  create(@Body() dto: CreateProductRawMaterialDto) {
    return this.productRawMaterialsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all products' })
  findAll() {
    return this.productRawMaterialsService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a product raw material' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productRawMaterialsService.remove(id);
  }
}
