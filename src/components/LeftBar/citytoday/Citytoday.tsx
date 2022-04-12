import React from 'react';
import s from "./Citytoday.module.scss";
import cloudy from "../../../images/cloudy.png";
import sun from "../../../images/sun.png";
import cloud from "../../../images/Cloud.png";
import dot from "../../../images/dot.png";
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { CurrentWeather, Daily, WeatherAll } from '../../../store/types';
import { Store } from '../../../store';

const Citytoday: FC = () => {
    const data: WeatherAll =useSelector((state:Store) => state.testReducer.apiWeather);
    const data_city:CurrentWeather =useSelector((state:Store) => state.testReducer.city);
    const city:string = data_city.name;
    const county:string = data_city?.sys?.country;
    const cloudness:string =(data_city && data_city.weather[0].description).charAt(0).toUpperCase() + (data_city && data_city.weather[0].description).slice(1);;
    const daily: Daily[] = data.daily;
    const clouds:number = daily && data.daily[0].clouds;
    const temperature:number = Math.round(data?.current?.temp ?? 0);
    const hours_now:string | number = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
    const minutes_now: string | number = new Date().getMinutes()< 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
    const time_now:string = hours_now + ":" + minutes_now;
    const day_array:string[] =["Sunday","Monday","Tuesdays","Wednesday","Thursday","Friday","Suturday"];
    const day_now:string = day_array[new Date().getDay()];

  return (
    <div className={s.wetherday}>
        <div className={s.wetherday__icon}> 
            <img src={clouds > 50 ? cloudy : sun} alt="cloudy" /> 
        </div>
        <div className={s.wetherday__info}>
            <h3>{temperature}°C</h3>
            <h4>{city}, {county}</h4>
            <p>{day_now},<span> {time_now}</span></p>
        </div>
        <div className={s.wetherday__clouds}>
            <img src={cloud} alt="cloud" />
            <p>Clouds - {clouds}%</p>
        </div>
        <div className={s.wetherday__clouds}>
            <img src={dot} alt="dot" />
            <p>{cloudness}</p>
        </div>

    </div>
  )
}

export default Citytoday;