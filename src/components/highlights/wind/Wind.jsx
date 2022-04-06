import React from 'react';
import p from "../Highlights.module.scss";
import s from "./Wind.module.scss";

const Wind = () => {
  return (
    <div className={p.boxHigh}>
      <h4>Wind Status</h4>
      <div className={s.indexbox}>
        <h4>2<span> km/h</span></h4>
        <p>Light breeze</p>
      </div>
    </div>
  )
}

export default Wind