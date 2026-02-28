import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturingPlanService } from './manufacturing-plan.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../products/product.entity';
import { RawMaterial } from '../raw-materials/raw-material.entity';

describe('ManufacturingPlanService', () => {
  let service: ManufacturingPlanService;

  const mockProductRepository = { find: jest.fn() };
  const mockRawMaterialRepository = { find: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ManufacturingPlanService,
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

    service = module.get(ManufacturingPlanService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should calculate manufacturing plan correctly', async () => {
    mockRawMaterialRepository.find.mockResolvedValue([
      { id: 1, stockQuantity: 10 },
    ]);

    mockProductRepository.find.mockResolvedValue([
      {
        id: 1,
        name: 'Premium',
        value: 100,
        productRawMaterials: [{ quantityRequired: 2, rawMaterial: { id: 1 } }],
      },
    ]);

    const result = await service.getManufacturingPlan();

    expect(result.products[0].quantity).toBe(5);
    expect(result.totalProductionValue).toBe(500);
  });
});
