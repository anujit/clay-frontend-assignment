import axios from 'axios';
import {requestHandler, logRequest} from '../interceptors';
import ApiConfig from './ApiConfig';
import MockAdapter from 'axios-mock-adapter';
import {doors, people, userEvents, adminAudit} from '../mocks';
import {ApiConsts} from './ApiConsts';

const {baseURI} = ApiConfig;

const axiosInstance = axios.create({
    baseURL: baseURI
});


export const mock = new MockAdapter(axiosInstance);

mock.onGet()
    .reply((config) => {
        const {url, headers} = config;
        const token = headers['X-Secret-Token'];

        // admin flows
        if (token === 'admin-secret-token') {
            if(url === `${baseURI}/people`) {
                return [200, people];                
            }
        }
        
        if(url === `${baseURI}/doors`) {
            return [200, doors];
        } 
        
        if(url === `${baseURI}/events`) {
            return [200, userEvents];
        }         
    });

mock.onPost()
    .reply((config) => {
        const {url, headers} = config;
        const token = headers['X-Secret-Token'];
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
            return [200, {}];
        }

        if (token === 'admin-secret-token') {
            if(url === `${baseURI}/people`) {
                return [200, {...JSON.parse(config.data), id: Math.random()}]
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

        if (token === ApiConsts.ADMIN_SECRET_TOKEN) {
            return [204,{}]
        }
    });

mock.onPatch()
    .reply((config) => {
        const {url, headers} = config;
        const token = headers['X-Secret-Token'];        
        // admin flows
        if (token === ApiConsts.ADMIN_SECRET_TOKEN) {
            return [200,{}]
        }
});


axiosInstance.interceptors.request.use(request => requestHandler(request));
axiosInstance.interceptors.request.use(request => logRequest(request));
export default axiosInstance;
