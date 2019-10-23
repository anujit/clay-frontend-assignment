import axiosInstance from './BaseApi';

export default class ManageAccessApi {
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
        const doorURI = `/people/${id}`;
        const res = await this.axiosInstance.patch(doorURI, {canOpenDoors});
        return res.data;
    }
}

const manageAccessApi = new ManageAccessApi();
export {manageAccessApi};
