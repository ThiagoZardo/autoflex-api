import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturingPlanService } from './manufacturing-plan.service';

describe('ManufacturingPlanService', () => {
  let service: ManufacturingPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManufacturingPlanService],
    }).compile();

    service = module.get<ManufacturingPlanService>(ManufacturingPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
