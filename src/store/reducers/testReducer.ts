import {WeatherReducer} from "../types";

const initialState: WeatherReducer = {
    apiWeather: null,
    city: null,
    coord: {
      lat: 49.2328,
      lon: 28.481,
    },
    
};
console.log(initialState)

export const FETCH_DATA_WEATHER = "FETCH_DATA_WEATHER";
export const FETCH_DATA_CITY = "FETCH_DATA_CITY";
export const FETCH_DATA_COORD = "FETCH_DATA_COORD";

export const testReducer = (state = initialState, action:any): WeatherReducer => {
  switch (action.type) {

    case FETCH_DATA_WEATHER:
        return {
          ...state,
          apiWeather: action.payload
        }
    case FETCH_DATA_CITY:
         return {
        ...state,
        city: action.payload
        }
    case FETCH_DATA_COORD:
         return {
         ...state,
         coord: action.payload
        }

  default:
    return state
  }
}
export const add = ()=> ({type:'ADD'})