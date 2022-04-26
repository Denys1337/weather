import { WeatherReducer } from "./reducerTypes";

export interface AxiosResponse {
    data: WeatherReducer;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request?: any;
}
export interface AxiosRequestConfig {
    handlerEnabled: boolean;
}