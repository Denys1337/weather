import React from 'react';
import p from "../Highlights.module.scss";
import up from "../../../images/up.png";
import down from "../../../images/down.png";
import s from "./Sunrise.module.scss";
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { WeatherAll } from '../../../core/types/weatherTypes';
import { FC } from 'react';

const Sunrise: FC = () => {
  const data: WeatherAll =useSelector((state: Store) => state.testReducer.apiWeather);
  const sunrise_hours: number = data.daily && new Date(data.daily[0].sunrise * 1000).getHours();
  const sunrise_hours_daily: string | number = sunrise_hours < 10 ? "0" + sunrise_hours : sunrise_hours;
  const sunrise_minutes: number = data.daily && new Date(data.daily[0].sunrise * 1000).getMinutes();
  const sunrise_minutes_daily: string | number = sunrise_minutes < 10 ? "0" + sunrise_minutes : sunrise_minutes;
  const sunrise: string = sunrise_hours_daily + ":" + sunrise_minutes_daily;
  const sunset_hours: number = data.daily && new Date(data.daily[0].sunset * 1000).getHours();
  const sunset_hours_daily: string | number = sunset_hours < 10 ? "0" + sunset_hours : sunset_hours;
  const sunset_minutes: number = data.daily && new Date(data.daily[0].sunset * 1000).getMinutes();
  const sunset_minutes_daily: string | number = sunset_minutes < 10 ? "0" + sunset_minutes : sunset_minutes;
  const sunset: string = sunset_hours_daily + ":" + sunset_minutes_daily;

  return (
    <div className={p.boxHigh}>
     <h4>Sunrise & Sunset</h4>
     <div>
       <div className= {s.up}>
          <img src={up} alt="up" />
          <p>{sunrise}</p>
       </div>
       <div className={s.down}>
          <img src={down} alt="down" />
          <p>{sunset}</p>
       </div>
     </div>
    </div>
  )
}

export default Sunrise