import React, { useEffect } from 'react';
import s from "./Search.module.scss";
import icon from "../../../images/search-icon.png";
import home from "../../../images/home.png";
import { useDispatch } from 'react-redux';
import { fetchDataWeather } from '../../../hooks/fetchDataWeather';
import Autocomplete from "react-google-autocomplete";

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataWeather( "Vinnytsia"))
    
  }, [dispatch]);

 
  return (
    <div className={s.search}>
        <span className={s.search__icon}><img src={icon} alt="icon-search" /></span>
        <Autocomplete
      apiKey="AIzaSyAQ0zSdSTORRJk0oYmKM2u_yuwwWRoYe7s"
      onPlaceSelected={(place) => {
        
        const selectedPlace = place.formatted_address.split(',')[0];
        dispatch(fetchDataWeather(selectedPlace));
         }}
      id="search"
      onFocus={e => e.target.setAttribute('autocomplete', 'off')}
    />
       <button className={s.search__home} onClick ={()=> dispatch(fetchDataWeather("Vinnytsia"))}><img src={home} alt="home" /></button>
        
    </div>
  )
}

export default Search