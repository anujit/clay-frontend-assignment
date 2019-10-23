import axiosInstance from './BaseApi';

export default class ResourcesApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    fetchUsers = () => {
        return (dispatch) => {
            const fetchUsersURI = `/people`;
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
}

const resourcesApi = new ResourcesApi();
export {resourcesApi};
