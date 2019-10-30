import axiosInstance from './BaseApi';

export default class ResourcesApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    fetchUsers = () => {
        return (dispatch) => {
            const fetchUsersURI = `/people`;
            dispatch({
                type: 'FETCH_PEOPLE_START'
            });        
            this.axiosInstance.get(fetchUsersURI)
                .then((res) => {
                    const users = res.data;
                    dispatch({
                        type: 'FETCH_PEOPLE_SUCCESS',
                        payload: users
                    });
                });
        }
    }

    fetchDoors = () => {
        return (dispatch) => {
            dispatch({
                type: 'FETCH_DOORS_START'
            });            
            const fetchDoorsURI = `/doors`;
            this.axiosInstance.get(fetchDoorsURI)
            .then((res) => {
                const doors = res.data;
                dispatch({
                    type: 'FETCH_DOORS_SUCCESS',
                    payload: doors
                })
            });
        }
    }

    addNewUser = (user) => {
        return (dispatch) => {
            dispatch({
                type: 'ADD_NEW_USER_START'
            }); 
            const addNewUserURI = `/people`;
            this.axiosInstance.post(addNewUserURI, user)
                .then((res) => {
                    const user = res.data;
                    dispatch({
                        type: 'ADD_NEW_USER_SUCCESS',
                        payload: user
                    });
                });
        }        
    }

    deleteUser = (user) => {
        return (dispatch) => {
            dispatch({
                type: 'DELETE_USER_START'
            });            
            const deleteUserURI = `/people/${user.id}`;
            this.axiosInstance.delete(deleteUserURI)
                .then(() => {
                    dispatch({
                        type: 'DELETE_USER_SUCCESS',
                        payload: user
                    });
                });
        }           
    }

    deleteDoor = (door) => {
        return (dispatch) => {
            dispatch({
                type: 'DELETE_DOOR_START'
            });            
            const deleteDoorURI = `/doors/${door.id}`;
            this.axiosInstance.delete(deleteDoorURI)
                .then(() => {
                    dispatch({
                        type: 'DELETE_DOOR_SUCCESS',
                        payload: door
                    });
                });
        }           
    }    
}

const resourcesApi = new ResourcesApi();
export {resourcesApi};
