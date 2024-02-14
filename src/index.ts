import { ApiService } from './services/ApiService';
import { DataProcessor } from './controllers/DataProcessor';
//const apiInput=require("prompt-sync")()

//const customApiUrl = apiInput('Enter the API:'); 

const customApiUrl='https://jsonplaceholder.typicode.com/todos/1';

const apiServiceInstance = new ApiService(customApiUrl);
const dataProcessorInstance = new DataProcessor(apiServiceInstance);


dataProcessorInstance.processApiData(customApiUrl);