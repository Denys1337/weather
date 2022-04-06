import React from 'react';
import p from "../Highlights.module.scss";
import s from "./Visibility.module.scss";

const Visibility = () => {
  return (
    <div className={p.boxHigh}>
      <h4>Visibility</h4>
      <div className={s.indexbox}>
        <h4>10<span> km/h</span></h4>
        <p>Good visibility</p>
      </div>
   </div>
  )
}

export default Visibility