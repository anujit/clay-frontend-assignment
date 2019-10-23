import axiosInstance from './BaseApi';

export default class AccessPermissionsApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    fetchPermissions = async () => {
        const fetchPermissionsURI = `/permissions`;
        const res = await this.axiosInstance.get(fetchPermissionsURI);
        return {
            permissions: res.data
        };
    }

    accessDoor = async ({doorId: id, isOpen}) => {
        const doorURI = `/doors/${id}`;
        const res = await this.axiosInstance.patch(doorURI, {isOpen});
        return res.data;
    }

    modifyPermission = async ({doorId: id, canOpenDoors}) => {
        const doorURI = `/doors/${id}`;
        const res = await this.axiosInstance.patch(doorURI, {canOpenDoors});
    }
}

const accessPermissionsApi = new AccessPermissionsApi();
export {accessPermissionsApi};
