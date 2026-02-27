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

@Controller('product-raw-materials')
export class ProductRawMaterialsController {
  constructor(
    private readonly productRawMaterialsService: ProductRawMaterialsService,
  ) {}

  @Post()
  create(@Body() dto: CreateProductRawMaterialDto) {
    return this.productRawMaterialsService.create(dto);
  }

  @Get()
  findAll() {
    return this.productRawMaterialsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productRawMaterialsService.remove(id);
  }
}
