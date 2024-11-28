"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// packages/database/src/seed.ts
const client_1 = require("./client");
async function main() {
    const facilities = [
        {
            type: 'Hospital',
            orgPracId: 'UTT001',
            name: 'Uttara Central Hospital',
            ranking: 5,
            photo: 'https://example.com/hospital1.jpg',
            category: 'Healthcare',
            subCategory: ['Medicine', 'Surgery', 'Cardiology', 'Neurology'],
            rating: 4.8,
            totalAppointments: 15000,
            zone: ['Uttara', 'Dhaka North'],
            branch: ['Sector 10', 'Sector 4'],
            areaOfPractice: 'local'
        },
        {
            type: 'Clinic',
            orgPracId: 'UTT002',
            name: 'Uttara Family Clinic',
            ranking: 4,
            category: 'Healthcare',
            subCategory: ['Family Medicine', 'Pediatrics', 'General Medicine'],
            rating: 4.6,
            totalAppointments: 8000,
            zone: ['Uttara', 'Dhaka North'],
            branch: ['Sector 6'],
            areaOfPractice: 'local'
        },
        {
            type: 'Diagnostic Center',
            orgPracId: 'UTT003',
            name: 'Modern Diagnostic Center',
            ranking: 4,
            category: 'Healthcare',
            subCategory: ['Pathology', 'Radiology', 'Laboratory'],
            rating: 4.7,
            totalAppointments: 12000,
            zone: ['Uttara', 'Dhaka North'],
            branch: ['Sector 11', 'Sector 7'],
            areaOfPractice: 'local'
        },
        {
            type: 'Specialty Hospital',
            orgPracId: 'UTT004',
            name: 'Uttara Eye Hospital',
            ranking: 5,
            category: 'Healthcare',
            subCategory: ['Ophthalmology', 'Eye Surgery', 'Vision Care'],
            rating: 4.9,
            totalAppointments: 10000,
            zone: ['Uttara', 'Dhaka North'],
            branch: ['Sector 9'],
            areaOfPractice: 'local'
        },
        {
            type: 'Hospital',
            orgPracId: 'UTT005',
            name: 'Medicare Hospital & Research',
            ranking: 4,
            category: 'Healthcare',
            subCategory: ['Medicine', 'Research', 'Cardiology', 'Oncology'],
            rating: 4.5,
            totalAppointments: 9000,
            zone: ['Uttara', 'Dhaka North'],
            branch: ['Sector 13'],
            areaOfPractice: 'local'
        },
        {
            type: 'Hospital',
            orgPracId: 'ORG001',
            name: 'City General Hospital',
            ranking: 5,
            category: 'Healthcare',
            subCategory: ['Medicine', 'Surgery', 'Cardiology'],
            rating: 4.8,
            totalAppointments: 1500,
            zone: ['Uttara', 'Dhaka North'],
            branch: ['Sector 10', 'Sector 4'],
            areaOfPractice: 'local'
        },
        {
            type: 'Clinic',
            orgPracId: 'ORG002',
            name: 'Uttara Medical Center',
            ranking: 4,
            category: 'Healthcare',
            subCategory: ['Medicine', 'Pediatrics'],
            rating: 4.6,
            totalAppointments: 1200,
            zone: ['Uttara', 'Dhaka North'],
            branch: ['Sector 6'],
            areaOfPractice: 'local'
        }
    ];
    for (const facility of facilities) {
        await client_1.prisma.facility.upsert({
            where: { orgPracId: facility.orgPracId },
            update: facility,
            create: facility,
        });
    }
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await client_1.prisma.$disconnect();
});
