import React from 'react';
import p from "../Highlights.module.scss";
import s from "./Temperature.module.scss";
import hight from "../../../images/hight-term.png";
import low from "../../../images/low-term.png";
import { useSelector } from 'react-redux';

const Temperature = () => {
  const data = useSelector(state => state.testReducer.apiWeather);
  const min_temp = Math.round(data.daily && data.daily[0].temp.min);
  const max_temp = Math.round(data.daily && data.daily[0].temp.max);
 
  return (
    <div className={p.boxHigh}>
      <h4>Min & Max temperature</h4>
    <div>
       <div className= {s.hight}>
          <img src={hight} alt="up" />
          <p>{min_temp}°</p>
       </div>
       <div className={s.hight}>
          <img src={low} alt="down" />
          <p>{max_temp}°</p>
       </div>
     </div>
   </div>
  )
}

export default Temperature