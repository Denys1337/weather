import React from 'react';
import p from "../Highlights.module.scss";
import up from "../../../images/up.png";
import down from "../../../images/down.png";
import s from "./Sunrise.module.scss";
import { useSelector } from 'react-redux';

const Sunrise = () => {
  const data =useSelector(state => state.testReducer.apiWeather);
  const sunrise_hours = data.daily && new Date(data.daily[0].sunrise * 1000).getHours();
  const sunrise_hours_daily = sunrise_hours < 10 ? "0" + sunrise_hours : sunrise_hours;
  const sunrise_minutes = data.daily && new Date(data.daily[0].sunrise * 1000).getMinutes();
  const sunrise_minutes_daily = sunrise_minutes < 10 ? "0" + sunrise_minutes : sunrise_minutes;
  const sunrise = sunrise_hours_daily + ":" + sunrise_minutes_daily;
  const sunset_hours = data.daily && new Date(data.daily[0].sunset * 1000).getHours();
  const sunset_hours_daily = sunset_hours < 10 ? "0" + sunset_hours : sunset_hours;
  const sunset_minutes = data.daily && new Date(data.daily[0].sunset * 1000).getMinutes();
  const sunset_minutes_daily = sunset_minutes < 10 ? "0" + sunset_minutes : sunset_minutes;
  const sunset = sunset_hours_daily + ":" + sunset_minutes_daily;

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