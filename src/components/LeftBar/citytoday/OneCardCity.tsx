import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { CurrentWeather } from '../../../core/types/weatherTypes';
import s from "./Citytoday.module.scss";
import cloudy from "../../../images/cloudy.png";
import sun from "../../../images/sun.png";
import cloud from "../../../images/Cloud.png";
import dot from "../../../images/dot.png";
import { useNavigate } from 'react-router-dom';
import { fetchDataWeatherDetails } from '../../../hooks/fetchDataWeather';

type OneCardCityProps = {
  cityAll : CurrentWeather,
}

const OneCardCity: FC<OneCardCityProps> = ({cityAll}) => {
  console.log(cityAll);
  const city = cityAll?.name;
  const county = cityAll?.sys?.country;
  const cloudness = (cityAll?.weather && cityAll?.weather[0]?.description);
  const clouds: number | undefined = cityAll?.clouds?.all;
  const temperature: number = Math.round(cityAll?.main?.temp ?? 0);
  const navigate = useNavigate();
  const lat = cityAll?.coord?.lat;
  const lon = cityAll?.coord?.lon;
  const dispatch= useDispatch()
  const weatherDetail = () => {
    dispatch(fetchDataWeatherDetails(lat,lon));
    navigate(`/weather/${lon}/${lat}`);
  }
 
  return (
    <div className={s.wetherday} onClick={weatherDetail}  key={lat}>
      <div className={s.wetherday__icon}>
        <img src={clouds && clouds > 50 ? cloudy : sun} alt="cloudy" />
      </div>
      <div className={s.wetherday__info}>
        <h3>{temperature}°C</h3>
        <h4>{city}, {county}</h4>
      </div>
      <div className={s.wetherday__clouds}>
        <img src={cloud} alt="cloud" />
        <p>Clouds - {clouds}%</p>
      </div>
      <div className={s.wetherday__clouds}>
        <img src={dot} alt="dot" />
        <p>{cloudness}</p>
      </div>
    </div>
  );
};

export default OneCardCity;
