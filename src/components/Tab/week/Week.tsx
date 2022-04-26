import React from 'react';
import { FC } from 'react';
import { Daily, Temperature } from '../../../core/types/weatherTypes';
import s from "../today/Today.module.scss";

type WeekProps ={
  today: Daily
}

const Week:FC<WeekProps> = ({today}) => {
  const temp_max:number = Math.round(today?.temp.max);
  const temp_min:number = Math.round(today?.temp.min);
  const BASE_ICON_URL:string = 'http://openweathermap.org/img/wn/';
  const days:string[]  = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
  return (
    <div className={s.weatherToday}>
        <h4>{days[new Date(today?.dt * 1000).getDay()]}</h4>
        <img src={BASE_ICON_URL + today?.weather[0].icon + "@2x.png"} alt="day" />
        <p>{temp_min}°<span> {temp_max}°</span></p>
    </div>
  )
}

export default Week