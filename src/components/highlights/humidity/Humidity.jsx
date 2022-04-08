import React from 'react'
import { useSelector } from 'react-redux';
import p from "../Highlights.module.scss";
import s from "./Humidity.module.scss";

const Humidity = () => {
  const data =useSelector(state => state.testReducer.apiWeather);
  const humidity = data.daily && data.daily[0].humidity
  console.log(data)

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