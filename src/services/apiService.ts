import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { apiConfig } from '../config/apiConfig';
import { Header } from './header';

const ApiService: AxiosInstance = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: Header(),
    timeout: 5000,
})

ApiService.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    console.log("req", req);
    return req
})

ApiService.interceptors.response.use((res: AxiosResponse) => {
    console.log("response", res);
    return res;
})

async function getAxios<T>(url: string, params?: any): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.get(url, { params });
    return response.data;
}

async function postAxios<T>(url: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.post(url, data);
    return response.data;
}
async function putAxios<T>(url: string, data?: any): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.post(url, data);
    return response.data;
}

async function deleteAxios<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await ApiService.post(url);
    return response.data;
}

export {
    getAxios,
    postAxios,
    putAxios,
    deleteAxios
}

