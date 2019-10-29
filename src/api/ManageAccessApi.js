import axiosInstance from './BaseApi';

export default class ManageAccessApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    accessDoor = ({doorId, userId}) => {
        return (dispatch) => {
            const doorURI = `/openDoors`;
            this.axiosInstance.post(doorURI, {doorId, userId})
                .then(() => {
                    dispatch({
                        type: 'ACCESS_DOORS_SUCCESS',
                        payload: {doorId, status: {
                            isError: false,
                            message: 'Door successfully opened!!'
                        }}
                    });
                }, () => {
                    dispatch({
                        type: 'ACCESS_DOORS_FAILURE',
                        payload: {doorId, status: {
                            isError: true,
                            message: 'Door failed to open'
                        }}
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
