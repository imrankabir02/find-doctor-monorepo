import { FacilitiesService } from './facilities.service';
export declare class FacilitiesController {
    private readonly facilitiesService;
    constructor(facilitiesService: FacilitiesService);
    searchFacilities(query: string): Promise<{
        id: string;
        type: string;
        orgPracId: string;
        username: string | null;
        name: string;
        ranking: number;
        photo: string | null;
        category: string;
        subCategory: string[];
        rating: number;
        totalAppointments: number;
        zone: string[];
        branch: string[];
        areaOfPractice: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
