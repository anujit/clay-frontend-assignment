import axios from 'axios';
import {requestHandler} from '../interceptors';
import ApiConfig from './ApiConfig';
import MockAdapter from 'axios-mock-adapter';

const {baseURI} = ApiConfig;

const axiosInstance = axios.create({
    baseURL: baseURI
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
            if(url === `${baseURI}/people`) {
                console.log('Mock request --- ', config.url, 'Mock response --- ', people);      
                return [200, people];                
            }
        } else if (token === 'user-1-secret-token') {

        }
        
        if(url === `${baseURI}/doors`) {
            console.log('Mock request --- ', config.url, 'Mock response --- ', doors);      
            return [200, doors];
        } 
        
        if(url === `${baseURI}/events`) {
            console.log('Mock request --- ', config.url, 'Mock response --- ', doors);      
            return [200, []];
        }         
    });

mock.onPost()
    .reply((config) => {
        const {url, headers} = config;
        const token = headers['X-Secret-Token'];        
        console.log(config);
        if(url === `${baseURI}/login`) {
            const loginPayload = JSON.parse(config.data);
            const {username} = loginPayload;

            if (username === 'admin') {
                const admin = {
                    role: 'admin',
                    userId: 'admin-1',
                    isLoggedIn: true,
                    apiToken: 'admin-secret-token'
                }
                return [200, admin];
            } else if (username === 'user1') {
                return [200, {
                    role: 'user',
                    userId: 'user-1',
                    isLoggedIn: true,
                    apiToken: 'user-1-secret-token'
                }]
            } else if (username === 'user2') {
                return [200, {
                    role: 'user',
                    userId: 'user-2',
                    isLoggedIn: true,
                    apiToken: 'user-2-secret-token'
                }]
            } else if (username === 'user3') {
                return [200, {
                    role: 'user',
                    userId: 'user-3',
                    isLoggedIn: true,
                    apiToken: 'user-3-secret-token'
                }]
            } else if (username === 'user4') {
                return [200, {
                    role: 'user',
                    userId: 'user-4',
                    isLoggedIn: true,
                    apiToken: 'user-4-secret-token'
                }]
            }

            return [500, {error: 'Wrong credentials'}];
        }

        if (url === `${baseURI}/logout`) {
            console.log('43434');
            return [200, {}];
        }

        if (token === 'admin-secret-token') {
            if(url === `${baseURI}/people`) {
                return [200, {...JSON.parse(data), id: Math.random()}]
            }
        }

        if(url === `${baseURI}/openDoors`) {
            if (token === 'user-3-secret-token') {
                return [500, {error: 'Not Authorized to open this door'}]
            } else {
                return [200, {}]
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
