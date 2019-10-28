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

mock.onGet()
    .reply((config) => {
        const {url, headers} = config;
        const token = headers['X-Secret-Token'];

        // admin flows
        if (token === 'admin-secret-token') {
            if(url === 'http://localhost:3000/people') {
                console.log('Mock request --- ', config.url, 'Mock response --- ', people);      
                return [200, people];                
            }

            if(url === 'http://localhost:3000/doors') {
                console.log('Mock request --- ', config.url, 'Mock response --- ', doors);      
                return [200, doors];
            }
        } else if (token === 'user-1-secret-token') {

        }
    });

mock.onPost()
    .reply((config) => {
        const {url, headers} = config;
        const token = headers['X-Secret-Token'];
        
        if (token === 'admin-secret-token') {
            if (url === 'http://localhost:3000/people') {
                console.log('post', JSON.parse(config.data));
                const payload = JSON.parse(config.data);
                return [200, {...payload, ...{id: 'people-3'}}];
            }
        }
    });

mock.onDelete()
    .reply((config) => {
        const {headers} = config;
        const token = headers['X-Secret-Token'];

        if (token === 'admin-secret-token') {
            return [204,{}]
        }
    });

mock.onPatch()
    .reply((config) => {
        const {url, headers} = config;
        console.log(config);
        const token = headers['X-Secret-Token'];        
        // admin flows
        if (token === 'admin-secret-token') {
            return [200,{}]
        }
});


axiosInstance.interceptors.request.use(request => requestHandler(request));
export default axiosInstance;
