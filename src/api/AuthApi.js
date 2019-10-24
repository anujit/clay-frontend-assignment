import axiosInstance from './BaseApi';

export default class ResourcesApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    login = () => {
        return (dispatch) => {
            const loginURI = `/login`;
            this.axiosInstance.get(loginURI)
            .then((res) => {
                const userInfo = res.data;
                // store the token in sessionStorage...

                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: userInfo
                })
            });
        }
    }

    logout = () => {
        return (dispatch) => {
            const logoutURI = `/logout`;
            this.axiosInstance.get(logoutURI)
            .then(() => { 
                // clear sessionStorage               
                dispatch({
                    type: 'LOGOUT_SUCCESS'
                })
            });
        }
    }    
}

const resourcesApi = new ResourcesApi();
export {resourcesApi};
