import React from 'react';
import s from "./Citytoday.module.scss";
import cloudy from "../../../images/cloudy.png";
import sun from "../../../images/sun.png";
import cloud from "../../../images/Cloud.png";
import dot from "../../../images/dot.png";
import { useSelector } from 'react-redux';

const Citytoday = () => {
    const data =useSelector(state => state.testReducer.apiWeather);
    const data_city =useSelector(state => state.testReducer.city);
    const city = data_city.name;
    const county = data_city?.sys?.country;
    const cloudness =(data_city && data_city.weather[0].description).charAt(0).toUpperCase() + (data_city && data_city.weather[0].description).slice(1);;
    const daily = data.daily;
    const clouds = daily && data.daily[0].clouds;
    const temperature = Math.round(data?.current?.temp ?? 0);
    const hours_now = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
    const minutes_now = new Date().getMinutes()< 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
    const time_now = hours_now + ":" + minutes_now;
    const day_array =["Sunday","Monday","Tuesdays","Wednesday","Thursday","Friday","Suturday"];
    const day_now = day_array[new Date().getDay()];

  return (
    <div className={s.wetherday}>
        <div className={s.wetherday__icon}> 
            <img src={clouds < 50 ? cloudy : sun} alt="cloudy" /> 
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