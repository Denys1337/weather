import React from 'react';
import s from "./Search.module.scss";
import icon from "../../../images/search-icon.png";
import home from "../../../images/home.png";

const Search = () => {
  return (
    <div className={s.search}>
        <span className={s.search__icon}><img src={icon} alt="icon-search" /></span>
        <input type="search" placeholder="search for places ..."></input>
        <button className={s.search__home}><img src={home} alt="home" /></button>
    </div>
  )
}

export default Search