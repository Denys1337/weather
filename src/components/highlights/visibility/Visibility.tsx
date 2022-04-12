import React from 'react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { WeatherAll } from '../../../store/types';
import p from "../Highlights.module.scss";
import s from "./Visibility.module.scss";

const Visibility: FC = () => {
  const data:WeatherAll =useSelector((state:Store) => state.testReducer.apiWeather);
  const visibility:number = (data.current && data.current.visibility) / 1000;
 
  return (
    <div className={p.boxHigh}>
      <h4>Visibility</h4>
      <div className={s.indexbox}>
        <h4>{visibility}<span> km/h</span></h4>
        <p>Good visibility</p>
      </div>
   </div>
  )
}

export default Visibility