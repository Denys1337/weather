import React from 'react';
import s from "./Citytoday.module.scss";
import cloudy from "../../../images/cloudy.png";
import cloud from "../../../images/Cloud.png";
import dot from "../../../images/dot.png";

const Citytoday = () => {
  return (
    <div className={s.wetherday}>
        <div className={s.wetherday__icon}> 
            <img src={cloudy} alt="cloudy" /> 
        </div>
        <div className={s.wetherday__info}>
            <h3>9°C</h3>
            <h4>City, UA</h4>
            <p>Day,<span> time</span></p>
        </div>
        <div className={s.wetherday__clouds}>
            <img src={cloud} alt="cloud" />
            <p>Clouds - 75%</p>
        </div>
        <div className={s.wetherday__clouds}>
            <img src={dot} alt="dot" />
            <p>Broken clouds</p>
        </div>

    </div>
  )
}

export default Citytoday