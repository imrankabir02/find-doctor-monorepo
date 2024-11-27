import { FacilitiesService } from './facilities.service';
export declare class FacilitiesController {
    private readonly facilitiesService;
    constructor(facilitiesService: FacilitiesService);
    searchFacilities(query: string): Promise<any>;
}
