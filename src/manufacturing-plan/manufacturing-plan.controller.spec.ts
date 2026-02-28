import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturingPlanController } from './manufacturing-plan.controller';
import { ManufacturingPlanService } from './manufacturing-plan.service';

describe('ManufacturingPlanController', () => {
  let controller: ManufacturingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ManufacturingPlanService,
          useValue: {},
        },
      ],
      controllers: [ManufacturingPlanController],
    }).compile();

    controller = module.get<ManufacturingPlanController>(
      ManufacturingPlanController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
