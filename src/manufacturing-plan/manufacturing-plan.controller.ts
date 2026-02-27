import { Controller, Get } from '@nestjs/common';
import { ManufacturingPlanService } from './manufacturing-plan.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ManufacturingPlan')
@Controller('manufacturing-plan')
export class ManufacturingPlanController {
  constructor(private readonly service: ManufacturingPlanService) {}

  @Get()
  @ApiOperation({ summary: 'Get the manufacturing plan' })
  getPlan() {
    return this.service.getManufacturingPlan();
  }
}
