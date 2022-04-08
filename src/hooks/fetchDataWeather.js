import axios from "axios";
import {FETCH_DATA_WEATHER, FETCH_DATA_CITY} from "../store/reducers/testReducer";

export const fetchDataWeather = (city) => {
    return async (dispatch) => {
      try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f5a07e3e731fc9685bc29c7880cddf65`)
        response && dispatch({ type: FETCH_DATA_CITY, payload: response.data })
        
        const { lon, lat } = response.data.coord;
        response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=f5a07e3e731fc9685bc29c7880cddf65`)
        response && dispatch({ type: FETCH_DATA_WEATHER, payload: response.data })
        
      } catch (e) {
        console.log(e)
      }
    }
  }