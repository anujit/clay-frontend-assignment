import axios from 'axios';
import {requestHandler} from '../interceptors';
import ApiConfig from './ApiConfig';
import MockAdapter from 'axios-mock-adapter';

const axiosInstance = axios.create({
    baseURL: ApiConfig.baseURI
});


export const mock = new MockAdapter(axiosInstance);

/**
 * Admin flow nocks
 */
mock.onGet('http://localhost:3000/people')
    .reply((config) => {
        const people = [
            {
            "id": "people-1",
            "name": "Anujit",
            "role": "admin",
            "canOpenDoors":["door-1","door-2"]
            },
            {
            "id": "people-2",
            "name": "Nene",
            "role": "user",
            "canOpenDoors":["door-2"]
            }
        ];
        console.log(config);
        console.log('Mock request --- ', config.url, 'Mock response --- ', people);      
        return [200, people];
    });

    mock.onGet('http://localhost:3000/doors')
    .reply((config) => {
        const doors = [
            {
              "id": "door-1",
              "name": "Door 1",
              "description": "Meeting Room Door",
              "isOpen": true
            },
            {
              "id": "door-2",
              "name": "Door 2",
              "description": "Lobby Door",
              "isOpen": false
            }
        ];
        console.log(config);
        console.log('Mock request --- ', config.url, 'Mock response --- ', doors);      
        return [200, doors];
    });

mock.onPatch(axiosInstance)
    .reply((config) => {
        console.log(config);
    });


axiosInstance.interceptors.request.use(request => requestHandler(request));
export default axiosInstance;
