// packages/shared/src/validation/facility.ts
import { z } from 'zod';

export const facilitySchema = z.object({
    id: z.string(),
    type: z.string(),
    orgPracId: z.string(),
    username: z.string().optional(),
    name: z.string(),
    ranking: z.number(),
    photo: z.string().optional(),
    category: z.string(),
    subCategory: z.array(z.string()),
    rating: z.number(),
    totalAppointments: z.number(),
    zone: z.array(z.string()),
    branch: z.array(z.string()),
    areaOfPractice: z.string()
});