import React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getHumidityStyle } from '../../../core/helpers/utils';
import { Store } from '../../../store';
import { WeatherAll } from '../../../store/types';
import p from "../Highlights.module.scss";
import s from "./Humidity.module.scss";

const Humidity: FC = () => {
  const {daily}:WeatherAll = useSelector((state: Store) => state.testReducer.apiWeather);
  const humidity: number = daily && daily[0].humidity;
  const humidityArray: Array<number> = daily && daily?.map(humidity => humidity.humidity);
  const humidityOne = humidityArray && humidityArray[0]

  return (
    <div className={p.boxHigh}>
     <h4>Humidity</h4>
     <div className={s.humidity}>
       <div>
          <h4>{humidity}<span> %</span></h4>
          <p>Miserable</p>
       </div>
       <div>
        <div className={s.frame}>
       <div style={getHumidityStyle(humidityOne)}></div>
     </div>
       </div>
     </div>
    </div>
  )
}

export default Humidity