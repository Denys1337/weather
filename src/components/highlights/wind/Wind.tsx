import React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { WeatherAll } from '../../../store/types';
import p from "../Highlights.module.scss";
import s from "./Wind.module.scss";

const Wind:FC = () => {
  const data:WeatherAll =useSelector((state:Store) => state.testReducer.apiWeather);
  const wind:number = data.daily && Math.round(data.daily[0].wind_speed);
 
  return (
    <div className={p.boxHigh}>
      <h4>Wind Status</h4>
      <div className={s.indexbox}>
        <h4>{wind}<span> km/h</span></h4>
        <p>Light breeze</p>
      </div>
    </div>
  )
}

export default Wind