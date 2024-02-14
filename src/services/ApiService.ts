// ApiService.ts
import fetch from 'node-fetch';
import { ApiResponse } from '../models/ApiResponse';

class ApiService {
    private apiBaseUrl: string;

    constructor(apiBaseUrl: string) {
        this.apiBaseUrl = apiBaseUrl;
    }

    async fetchData(url: string): Promise<ApiResponse> {
        try {
            const response = await fetch(url);
            const data = await response.json();

            return new ApiResponse(data);
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error fetching data from the API: ${error.message}`);
            } else {
                throw new Error(`Unknown error occurred: ${error}`);
            }
        }
    }
}

export { ApiService };

