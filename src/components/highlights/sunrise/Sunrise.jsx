import React from 'react';
import p from "../Highlights.module.scss";
import up from "../../../images/up.png";
import down from "../../../images/down.png";
import s from "./Sunrise.module.scss";

const Sunrise = () => {
  return (
    <div className={p.boxHigh}>
     <h4>Sunrise & Sunset</h4>
     <div>
       <div className= {s.up}>
          <img src={up} alt="up" />
          <p>07:02</p>
       </div>
       <div className={s.down}>
          <img src={down} alt="down" />
          <p>16:20</p>
       </div>
     </div>
    </div>
  )
}

export default Sunrise