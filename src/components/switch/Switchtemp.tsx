import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { celsius, fahrenheit } from '../../store/reducers/testReducer';
import s from "./Switchtemp.module.scss";

const Switchtemp:FC = () => {
 
  const classs:string = s.switch_item + ' ' + s.active;
  const switchScale = (e:any):void => {
    const switchItems = document.querySelectorAll(`.${s.switch_item}`)
    switchItems.forEach(item => item.classList.remove(s.active))
    e.target.classList.add(s.active)
  }
  const dispatch = useDispatch()
  const switchFahrenheit = (e:any):void =>{
    switchScale(e)
    dispatch(fahrenheit())
  }
  const switchCelsius = (e: any): void => {
    switchScale(e)
    dispatch(celsius())
  }
  
  return (
    <div className={s.temperature_switch}>
    <span className={ classs } onClick = {(e) => switchCelsius(e) }>&deg;C</span>
  < span className = { s.switch_item } onClick = {(e) => switchFahrenheit(e)}>&deg;F</span>
      
    </div>
  )
}

export default Switchtemp;