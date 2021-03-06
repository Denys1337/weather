import axios from "axios";
import { AxiosResponse } from "../core/types/fetchDataType";
import { Dispatch } from "redux";
import {FETCH_DATA_WEATHER, FETCH_DATA_CITY, FETCH_DATA_COORD, ADD_CARD} from "../store/reducers/testReducer";
import { API_KEY, BASE_URL } from "../core/constants/constants";

 

export const fetchDataWeather = (city:string) => {
    return async (dispatch:Dispatch):Promise<void> => {
      try {
        let response: AxiosResponse = await axios.get(BASE_URL + `weather?q=${city}&units=metric&appid=` + API_KEY);
        // response && dispatch({ type: FETCH_DATA_CITY, payload: response.data });
        // response && dispatch({ type: FETCH_DATA_COORD, payload: response.data.coord })
        response && dispatch({ type: ADD_CARD, payload: response.data });
       
      } catch (e) {
        console.warn(e);
      }
    }
  }

  export const fetchDataWeatherDetails = (lat:number | undefined ,lon:number | undefined) => {
    return async (dispatch:Dispatch):Promise<void> => {
      try {
        let response = await axios.get(BASE_URL + `onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=` + API_KEY);
        response && dispatch({ type: FETCH_DATA_WEATHER, payload: response.data });
        
      } catch (e) {
        console.warn(e);
      }
    }
  }