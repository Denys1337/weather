import { CurrentWeather, WeatherAll } from "./weatherTypes";

export type WeatherReducer = {
    apiWeather: WeatherAll,
    city: CurrentWeather | null,
    coord: {
        lat: number,
        lon: number,
    },

}