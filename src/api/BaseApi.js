import axios from 'axios';
import {requestHandler} from '../interceptors';
import ApiConfig from './ApiConfig';

const axiosInstance = axios.create({
    baseURL: ApiConfig.baseURI
});

axiosInstance.interceptors.request.use(request => requestHandler(request));
export default axiosInstance;
