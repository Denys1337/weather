import React from 'react'
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { WeatherAll } from '../../../store/types';
import p from "../Highlights.module.scss";
import s from "./Humidity.module.scss";

const Humidity: FC = () => {
  const data : WeatherAll = useSelector((state: Store) => state.testReducer.apiWeather);
  const humidity: number = data.daily && data?.daily[0].humidity

  return (
    <div className={p.boxHigh}>
     <h4>Humidity</h4>
     <div className={s.humidity}>
       <div>
          <h4>{humidity}<span> %</span></h4>
          <p>Miserable</p>
       </div>
       <div>
        <p>sacs</p>
       </div>
     </div>
    </div>
  )
}

export default Humidity