import React from 'react'
import p from "../Highlights.module.scss";
import s from "./Humidity.module.scss";

const Humidity = () => {
  return (
    <div className={p.boxHigh}>
     <h4>Humidity</h4>
     <div className={s.humidity}>
       <div>
          <h4>81<span> %</span></h4>
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