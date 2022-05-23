import { CurrentWeather, WeatherAll } from "./weatherTypes";

export type WeatherReducer = {
    apiWeather: WeatherAll,
    city: Array<WeatherAll> ,
    coord: {
        lat: number,
        lon: number,
    },
}
