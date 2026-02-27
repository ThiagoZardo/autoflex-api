import { Test, TestingModule } from '@nestjs/testing';
import { ManufacturingPlanController } from './manufacturing-plan.controller';

describe('ManufacturingPlanController', () => {
  let controller: ManufacturingPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManufacturingPlanController],
    }).compile();

    controller = module.get<ManufacturingPlanController>(ManufacturingPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
