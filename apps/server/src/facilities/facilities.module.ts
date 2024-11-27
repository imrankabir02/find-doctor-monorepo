// apps/server/src/facilities/facilities.module.ts
import { Module } from '@nestjs/common';
import { FacilitiesController } from './facilities.controller';
import { FacilitiesService } from './facilities.service';

@Module({
    controllers: [FacilitiesController],
    providers: [FacilitiesService],
})
export class FacilitiesModule { }