import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('RawMaterials')
@Controller('raw-materials')
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new raw material' })
  create(@Body() createDto: CreateRawMaterialDto) {
    return this.rawMaterialsService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all raw materials' })
  findAll() {
    return this.rawMaterialsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a raw material by ID' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rawMaterialsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a raw material' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: Partial<CreateRawMaterialDto>,
  ) {
    return this.rawMaterialsService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a raw material' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rawMaterialsService.remove(id);
  }
}
