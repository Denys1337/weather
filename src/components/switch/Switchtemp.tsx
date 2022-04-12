import React from 'react';
import s from "./Switchtemp.module.scss";

const Switchtemp = () => {
 
  const classs = s.switch_item + ' ' + s.active;
  const switchScale = (e) => {
    const switchItems = document.querySelectorAll(`.${s.switch_item}`)
    switchItems.forEach(item => item.classList.remove(s.active))
    e.target.classList.add(s.active)
  }
  
  return (
    <div className={s.temperature_switch}>
      <span className={classs} onClick={(e) => switchScale(e) }>&deg;C</span>
      <span className={s.switch_item} onClick={(e) => switchScale(e)}>&deg;F</span>
      
    </div>
  )
}

export default Switchtemp;