import axiosInstance from './BaseApi';

export default class AuthApi {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    login = (payload) => {
        return (dispatch) => {
            const loginURI = `/login`;
            this.axiosInstance.post(loginURI, payload)
            .then((res) => {
                const userInfo = res.data;
                console.log('login successful', res.data);
                // store the token in sessionStorage...
                sessionStorage.setItem('secretToken', res.data.apiToken);
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
            this.axiosInstance.post(logoutURI, {})
            .then(() => { 
                // clear sessionStorage   
                sessionStorage.clear();            
                dispatch({
                    type: 'LOGOUT_SUCCESS'
                })
            });
        }
    }    
}

const authApi = new AuthApi();
export {authApi};
