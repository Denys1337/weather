import React from 'react';
import s from "../today/Today.module.scss";
import day from "../../../images/day.png";

const Week = () => {
  return (
    <div className={s.weatherToday}>
        <h4>Day</h4>
        <img src={day} alt="day" />
        <p>5°<span> 8°</span></p>
    </div>
  )
}

export default Week