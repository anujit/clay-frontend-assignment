import axiosInstance from './BaseApi';

export default class ManageAccessApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    accessDoor = ({doorId, isOpen}) => {
        return (dispatch) => {
            const doorURI = `/doors/${doorId}`;
            this.axiosInstance.patch(doorURI, {doorId, isOpen})
                .then(() => {
                    dispatch({
                        type: 'ACCESS_DOORS_SUCCESS',
                        payload: {doorId, isOpen}
                    });
                });
        }        
    }

    modifyPermission = ({userId, doorId, toAdd}) => {
        return (dispatch) => {
            const peopleURI = `/people/${userId}`;
            this.axiosInstance.patch(peopleURI, {doorId, toAdd})
                .then(() => {
                    dispatch({
                        type: 'MODIFY_PERMISSION_SUCCESS',
                        payload: {userId, doorId, toAdd}
                    });
                });
        }
    }
}

const manageAccessApi = new ManageAccessApi();
export {manageAccessApi};
