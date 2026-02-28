import { Test, TestingModule } from '@nestjs/testing';
import { ProductRawMaterialsService } from './product-raw-materials.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductRawMaterial } from './product-raw-material.entity';
import { Product } from '../products/product.entity';
import { RawMaterial } from '../raw-materials/raw-material.entity';

describe('ProductRawMaterialsService', () => {
  let service: ProductRawMaterialsService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
  };

  const mockProductRepository = {
    findOne: jest.fn(),
  };

  const mockRawMaterialRepository = {
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductRawMaterialsService,
        {
          provide: getRepositoryToken(ProductRawMaterial),
          useValue: mockRepository,
        },
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductRepository,
        },
        {
          provide: getRepositoryToken(RawMaterial),
          useValue: mockRawMaterialRepository,
        },
      ],
    }).compile();

    service = module.get<ProductRawMaterialsService>(
      ProductRawMaterialsService,
    );
  });

  afterEach(() => jest.clearAllMocks());

  it('should create association', async () => {
    const dto = {
      productId: 1,
      rawMaterialId: 1,
      quantityRequired: 2,
    };

    const product = { id: 1 };
    const rawMaterial = { id: 1 };

    mockProductRepository.findOne.mockResolvedValue(product);
    mockRawMaterialRepository.findOne.mockResolvedValue(rawMaterial);

    mockRepository.create.mockReturnValue(dto);
    mockRepository.save.mockResolvedValue(dto);

    const result = await service.create(dto);

    expect(result).toEqual(dto);
  });

  it('should list associations', async () => {
    mockRepository.find.mockResolvedValue([{ id: 1 }]);

    const result = await service.findAll();

    expect(result.length).toBe(1);
  });
});
