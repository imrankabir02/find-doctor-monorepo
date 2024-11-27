// apps/server/src/facilities/facilities.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { FacilitiesService } from './facilities.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('facilities')
@Controller('facilities')
export class FacilitiesController {
    constructor(private readonly facilitiesService: FacilitiesService) { }

    @Get('search')
    @ApiOperation({ summary: 'Search facilities' })
    async searchFacilities(@Query('query') query: string) {
        return this.facilitiesService.searchFacilities(query);
    }
}