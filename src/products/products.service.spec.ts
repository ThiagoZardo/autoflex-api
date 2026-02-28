import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';

describe('ProductsService', () => {
  let service: ProductsService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should create a product', async () => {
    const dto = { name: 'Burger', value: 20 };

    mockRepository.create.mockReturnValue(dto);
    mockRepository.save.mockResolvedValue(dto);

    const result = await service.create(dto);

    expect(result).toEqual(dto);
    expect(mockRepository.create).toHaveBeenCalledWith(dto);
  });

  it('should return all products', async () => {
    mockRepository.find.mockResolvedValue([{ id: 1 }]);

    const result = await service.findAll();

    expect(result.length).toBe(1);
  });
});
