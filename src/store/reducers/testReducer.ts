import { translateCelsius, translateFahrenheit } from "../../core/helpers/utils";
import { WeatherReducer } from "../../core/types/reducerTypes";
import { WeatherAll } from "../../core/types/weatherTypes";

const initialState:WeatherReducer = {
  apiWeather: {} as WeatherAll,
  city:  [] as Array<WeatherAll>,
  coord: {
    lat: 49.2328,
    lon: 28.481,
  },

};
export const FETCH_DATA_WEATHER = "FETCH_DATA_WEATHER";
export const ADD_CARD = "ADD_CARD";
export const FETCH_DATA_CITY = "FETCH_DATA_CITY";
export const FETCH_DATA_COORD = "FETCH_DATA_COORD";
export const TO_FAHRENHEIT = "TO_FAHRENHEIT";
export const TO_CELSIUS = "TO_CELSIUS";

export const testReducer = (state = initialState, action: any): WeatherReducer => {
  switch (action.type) {

    case FETCH_DATA_WEATHER: 
      return {
        ...state,
        apiWeather: action.payload,
      }
      case ADD_CARD: 
      return {
        ...state,
        city:[...state.city, action.payload ],
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
    case TO_FAHRENHEIT:
      return {
        ...state,
        apiWeather: {
          ...state.apiWeather,
          current: {
            ...state.apiWeather.current,
            temp: translateFahrenheit(state.apiWeather.current.temp)
          },
          daily: state.apiWeather.daily.map(day => ({
             ...day,
             temp: {
               ...day.temp,
               min: translateFahrenheit(day.temp.min),
               max: translateFahrenheit(day.temp.max)
             }
           })),
          hourly: state.apiWeather.hourly.map(hour => ({
            ...hour,
            temp: translateFahrenheit(hour.temp),
            feels_like: translateFahrenheit(hour.feels_like)
          })),
        },
        }
    case TO_CELSIUS:
      return {
        ...state,
        apiWeather: {
          ...state.apiWeather,
          current: {
            ...state.apiWeather.current,
            temp: translateCelsius(state.apiWeather.current.temp)
          },
           daily: state.apiWeather.daily.map(day => ({
             ...day,
             temp: {
               ...day.temp,
               min: translateCelsius(day.temp.min),
               max: translateCelsius(day.temp.max)
             }
           })),
          hourly: state.apiWeather.hourly.map(hour => ({
            ...hour,
            temp: translateCelsius(hour.temp),
            feels_like: translateCelsius(hour.feels_like)
          })),
        },
        }

    default:
      return state
  }
}
// Action 
export const fahrenheit = () => ({ type: TO_FAHRENHEIT })
export const celsius = () => ({ type: TO_CELSIUS })
export const addCard = (payload:any) => ({ type: ADD_CARD ,payload})
export const cityCards = (payload:any) => ({ type: FETCH_DATA_CITY, payload })