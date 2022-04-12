import React from 'react';
import Humidity from './humidity/Humidity';
import IndexUV from './indexUV/UVindex';
import Sunrise from './sunrise/Sunrise';
import Temperature from './temperature/Temperature';
import Visibility from './visibility/Visibility';
import Wild from './wind/Wind';
import s from "./Highlights.module.scss";
import { FC } from 'react';

const Highlights:FC = () => {
  return (
      <div>
          <h3>Today’s Highlights</h3>
        <div className={s.highlights}>
            <IndexUV/>
            <Wild/>
            <Sunrise/>
            <Humidity/>
            <Visibility/>
            <Temperature/>
        </div>
    </div>
  )
}

export default Highlights