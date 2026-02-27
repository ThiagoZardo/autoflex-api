import { Controller, Get } from '@nestjs/common';
import { ManufacturingPlanService } from './manufacturing-plan.service';

@Controller('manufacturing-plan')
export class ManufacturingPlanController {
  constructor(private readonly service: ManufacturingPlanService) {}

  @Get()
  getPlan() {
    return this.service.getManufacturingPlan();
  }
}
