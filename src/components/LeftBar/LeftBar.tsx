import React from 'react';
import { FC } from 'react';
import Citytoday from './citytoday/Citytoday';
import s from "./LeftBar.module.scss";
import Search from './search/Search';

const LeftBar:FC = () => {
  return (
    <div className={s.leftbar}>
        <Search/>
        <Citytoday/>
    </div>
  )
}

export default LeftBar