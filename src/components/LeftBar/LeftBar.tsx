import React, { useRef, useState } from 'react';
import { FC } from 'react';
import Citytoday from './citytoday/Citytoday';
import s from "./LeftBar.module.scss";
import Search from './search/Search';

const LeftBar: FC = () => {

  const [isActive,setActive] = useState(false)
  const handleToggle = () => {
    setActive((isActive)=>!isActive);
  };
  function disableScrolling() {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
  }

  function enableScrolling() {
    window.onscroll = function () { };
  }
  if(isActive){
    disableScrolling()
  }
  else{
    enableScrolling()
  }



  return (
    <div>
    <div className = { s.leftbar } >
    <Search/>
    < Citytoday />
    </div>

    < header >
    <div  className = { `${s.menu_btn} ${isActive ? s.active : ""}` } onClick = {handleToggle} >
      <span></span>
      < span > </span>
      < span > </span>
      </div>
      </header>

    < div className = {`${s.menu} ${isActive ? s.active : ""}`} >
        <Search/>
        < Citytoday />
        </div>

        </div>
  )
}

export default LeftBar