import axiosInstance from './BaseApi';

export default class ResourcesApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    fetchUsers = async () => {
        const fetchUsersURI = `/people`;
        const res = await this.axiosInstance.get(fetchUsersURI);
        return {
            users: res.data
        };
    }

    fetchDoors = async () => {
        const fetchDoorsURI = `/doors`;
        const res = await this.axiosInstance.get(fetchDoorsURI);
        return {
            doors: res.data
        };
    }    
}

const resourcesApi = new ResourcesApi();
export {resourcesApi};
