import React from 'react';
import p from "../Highlights.module.scss";
import s from "./Temperature.module.scss";
import hight from "../../../images/hight-term.png";
import low from "../../../images/low-term.png";

const Temperature = () => {
  return (
    <div className={p.boxHigh}>
      <h4>Min & Max temperature</h4>
    <div>
       <div className= {s.hight}>
          <img src={hight} alt="up" />
          <p>7°</p>
       </div>
       <div className={s.hight}>
          <img src={low} alt="down" />
          <p>9°</p>
       </div>
     </div>
   </div>
  )
}

export default Temperature