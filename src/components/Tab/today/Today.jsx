import React from 'react';
import s from "./Today.module.scss";
import day from "../../../images/day.png";

const Today = () => {
  return (
    <div className={s.weatherToday}>
        <h4>Time</h4>
        <img src={day} alt="day" />
        <p>5°<span> 8°</span></p>
    </div>
  )
}

export default Today