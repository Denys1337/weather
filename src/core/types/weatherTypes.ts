export type WeatherAll = {
    name: string;
    weather: Weather[];
    curWeather: CurrentWeather;
    timezone: string;
    timezone_offset: number;
    current: InfoWeather;
    minutely: Minutely;
    hourly: Hourly[];
    daily: Daily[];
};

export type Daily = {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temperature;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    uvi: number;
};

export type Weather = {
    id: number,
    main: string,
    description: string,
    icon: string,
};

export type FeelsLike = {
    day: number,
    night: number,
    eve: number,
    morn: number,
};

export type Temperature = {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
};

export type CurrentWeather = {
    coord?: Coord,
    weather: Weather[],
    base?: string,
    main?: any,
    visibility?: number,
    wind?: Wind,
    clouds?: Clouds,
    dt?: number,
    sys?: InternalParameters,
    id?: number,
    name?: string,
    cod?: number,
};

export type InfoWeather = {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
};

export type Minutely = {
    dt: number;
    precipitation: number;
};

export type Hourly = {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather[];
    pop: number;
};

export type Coord = {
    lon: number;
    lat: number;
};

export type Wind = {
    speed: number;
    deg: number;
};

export type Clouds = {
    all: number;
};

export type InternalParameters = {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
};




