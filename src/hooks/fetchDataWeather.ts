import axios from "axios";
import { Dispatch } from "redux";
import {FETCH_DATA_WEATHER, FETCH_DATA_CITY, FETCH_DATA_COORD} from "../store/reducers/testReducer";
import { WeatherReducer } from "../store/types";

 interface AxiosResponse  {
  data: WeatherReducer;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}
interface AxiosRequestConfig {
  handlerEnabled: boolean;
}

export const fetchDataWeather = (city:string) => {
    return async (dispatch:Dispatch):Promise<void> => {
      try {
        let response: AxiosResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f5a07e3e731fc9685bc29c7880cddf65`)
        response && dispatch({ type: FETCH_DATA_CITY, payload: response.data })
        response && dispatch({ type: FETCH_DATA_COORD, payload: response.data.coord })
        const { lon, lat } = response.data.coord;
        response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=f5a07e3e731fc9685bc29c7880cddf65`)
        response && dispatch({ type: FETCH_DATA_WEATHER, payload: response.data })
        
      } catch (e) {
        console.log(e)
      }
    }
  }