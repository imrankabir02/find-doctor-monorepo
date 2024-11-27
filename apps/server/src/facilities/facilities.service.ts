// apps/server/src/facilities/facilities.service.ts
import { Injectable } from '@nestjs/common';
import { prisma } from '../../../../packages/database/src/client';

@Injectable()
export class FacilitiesService {
  async searchFacilities(query: string) {
    return prisma.facility.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { type: { contains: query, mode: 'insensitive' } },
          { subCategory: { has: query } },
          { zone: { has: query } }
        ]
      }
    });
  }
}