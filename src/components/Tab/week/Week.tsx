import React from 'react';
import { FC } from 'react';
import { days } from '../../../core/constants/constants';
import { Daily} from '../../../core/types/weatherTypes';
import s from "../today/Today.module.scss";

type WeekProps ={
  today: Daily
}

const Week:FC<WeekProps> = ({today}) => {
  const temp_max:number = Math.round(today?.temp.max);
  const temp_min:number = Math.round(today?.temp.min);
  const BASE_ICON_URL:string = 'http://openweathermap.org/img/wn/';
 
  return (
    <div className={s.weatherToday}>
        <h4>{days[new Date(today?.dt * 1000).getDay()]}</h4>
        <img src={BASE_ICON_URL + today?.weather[0].icon + "@2x.png"} alt="day" />
        <p>{temp_min}°<span> {temp_max}°</span></p>
    </div>
  )
}

export default Week