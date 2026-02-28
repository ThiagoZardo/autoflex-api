import { Test, TestingModule } from '@nestjs/testing';
import { RawMaterialsService } from './raw-materials.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RawMaterial } from './raw-material.entity';

describe('RawMaterialsService', () => {
  let service: RawMaterialsService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RawMaterialsService,
        {
          provide: getRepositoryToken(RawMaterial),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RawMaterialsService>(RawMaterialsService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should create a raw material', async () => {
    const dto = { name: 'Flour', stockQuantity: 100 };

    mockRepository.create.mockReturnValue(dto);
    mockRepository.save.mockResolvedValue(dto);

    const result = await service.create(dto);

    expect(result).toEqual(dto);
  });

  it('should list raw materials', async () => {
    mockRepository.find.mockResolvedValue([{ id: 1 }]);

    const result = await service.findAll();

    expect(result.length).toBe(1);
  });
});
