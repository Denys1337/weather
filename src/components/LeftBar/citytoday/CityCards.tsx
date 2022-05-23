import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';
import { Store } from '../../../store';
import OneCardCity from './OneCardCity';
import { WeatherAll } from '../../../core/types/weatherTypes';
import s from "./Citytoday.module.scss";
import { addCard, cityCards } from '../../../store/reducers/testReducer';

const CityCards: FC = () => {

  // const AllCity = useSelector((state: Store) => state.testReducer.city);
  const data1 = (localStorage.getItem('redux-store')!) ;
  const data2 = JSON.parse(data1);
  const lastData = data2?.testReducer?.city;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(cityCards(lastData))
  }, [dispatch,lastData])
  
 
  return (
    <div className={s.wrapper}>
      {lastData?.length > 0 ? lastData.map((cityAll: WeatherAll, i: number) => <OneCardCity cityAll={cityAll} key={i} />) : []}
    </div>

  )
}

export default CityCards;
