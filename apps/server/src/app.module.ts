// apps/server/src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FacilitiesModule } from './facilities/facilities.module';

@Module({
  imports: [PrismaModule, FacilitiesModule],
})
export class AppModule {}