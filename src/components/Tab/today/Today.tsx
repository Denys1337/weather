import React from 'react';
import { FC } from 'react';
import { Hourly } from '../../../store/types';
import s from "./Today.module.scss";

type TodayProps = {
  hourly: Hourly
} 

const Today:FC<TodayProps> = ({hourly}) => {
  const temp:number = Math.round(hourly?.temp);
  const BASE_ICON_URL:string = 'http://openweathermap.org/img/wn/';
  
  return (
    <div className={s.weatherToday}>
        <h4>{new Date(hourly?.dt * 1000).getHours()} : 00</h4>
        <img src={BASE_ICON_URL + hourly?.weather[0].icon + "@2x.png"} alt="day" />
        <p>{temp}°</p>
    </div>
  )
}

export default Today