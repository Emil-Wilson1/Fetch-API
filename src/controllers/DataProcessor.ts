import { ApiService } from '../services/ApiService';
import { ApiRequest } from '../models/ApiRequest';


export class DataProcessor {
    private apiService: ApiService;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
    }

    async processApiData(url: string): Promise<void> {
        try {

            const apiRequest = new ApiRequest(url);
            const apiResponse = await this.apiService.fetchData(url);
            console.log(`Data from the API: ${JSON.stringify(apiResponse.data)}`);
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Error processing API data: ${error.message}`);
            } else {
                console.error(`Unknown error occurred: ${error}`);
            }
        }
    }
}