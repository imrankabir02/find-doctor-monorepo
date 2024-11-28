"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilitySchema = void 0;
// packages/shared/src/validation/facility.ts
const zod_1 = require("zod");
exports.facilitySchema = zod_1.z.object({
    id: zod_1.z.string(),
    type: zod_1.z.string(),
    orgPracId: zod_1.z.string(),
    username: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    ranking: zod_1.z.number(),
    photo: zod_1.z.string().optional(),
    category: zod_1.z.string(),
    subCategory: zod_1.z.array(zod_1.z.string()),
    rating: zod_1.z.number(),
    totalAppointments: zod_1.z.number(),
    zone: zod_1.z.array(zod_1.z.string()),
    branch: zod_1.z.array(zod_1.z.string()),
    areaOfPractice: zod_1.z.string()
});
