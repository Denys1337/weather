import React from 'react';
import s from "./Search.module.scss";
import icon from "../../../images/search-icon.png";
import { useDispatch } from 'react-redux';
import { fetchDataWeather } from '../../../hooks/fetchDataWeather';
import Autocomplete from "react-google-autocomplete";
import { FC } from 'react';
import { addCard } from '../../../store/reducers/testReducer';

const Search:FC = () => {

  const dispatch = useDispatch();

  return (
    <div className={s.search}>
        <span className={s.search__icon}><img src={icon} alt="icon-search" /></span>
        <Autocomplete
      apiKey="AIzaSyAQ0zSdSTORRJk0oYmKM2u_yuwwWRoYe7s"
      onPlaceSelected={(place) => {
        
        const selectedPlace:string  = place!.formatted_address!.split(',')[0];
        dispatch(fetchDataWeather(selectedPlace));
       }}
      id="search"
      onFocus={e => e.target.setAttribute('autocomplete', 'off')}
    />    
    </div>
  )
}

export default Search;
