import React, { useRef } from 'react';
import { FC } from 'react';
import Citytoday from './citytoday/Citytoday';
import s from "./LeftBar.module.scss";
import Search from './search/Search';

const LeftBar: FC = () => {

  const clasStyle: string = s.leftbar + ' ' + s.menu;
  let menuBtnRef = useRef(null);
  let menuRef =  useRef(null);
  let menuBtn: HTMLDivElement | null = menuBtnRef.current;
  let menu: HTMLDivElement | null = menuRef.current;

  const menuBar = ()=>{
      menuBtn!.classList.toggle('active');
      menu!.classList.toggle('active');
   
  }


  return (
    <div>
    <div className = { s.leftbar } >
    <Search/>
    < Citytoday />
    </div>

    < header >
    <div ref={ menuBtnRef } className = { s.menu_btn } onClick = {()=> menuBar()} >
      <span></span>
      < span > </span>
      < span > </span>
      </div>
      </header>

      <div ref={menuRef} className = { s.menu} >
        <Search/>
        < Citytoday />
      </div>

        </div>
  )
}

export default LeftBar