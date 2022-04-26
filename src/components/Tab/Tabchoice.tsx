import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import s from "./Tab.module.scss";
import Today from './today/Today';
import Week from './week/Week';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { Store } from '../../store';
import { Daily, Hourly, WeatherAll } from '../../core/types/weatherTypes';

const Tabchoice:FC = () => {

  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent<Element>, newValue:string):void => {
    setValue(newValue);
    console.log(event)
  };
  const data:WeatherAll =useSelector((state:Store) => state.testReducer.apiWeather);
  const todays:Daily[]= data?.daily;
  const hourlys:Hourly[] = data?.hourly;
  
  return (
    <div className={s.tabcontent}>
    <TabContext value={value} >
    <div>
  <Box >
    <TabList onChange={handleChange} aria-label="lab API tabs example" className={s.tabcontent__tab}>
      <Tab label="Today" value="1" />
      <Tab  label="Week" value="2" />
    </TabList>
  </Box>
  </div>
  <div>
    <TabPanel value="1" sx={{ padding: 0}} className={s.card}>{hourlys ? hourlys.map((hourly,index) => <Today  hourly={hourly} key={index}/>).slice(0,8): "no hours"}</TabPanel>
    <TabPanel value = "2" sx = {{ padding: 0}} className={s.card}>{todays ? todays.map((today,index) =>  <Week today={today} key={index}/> ): "no day"}</TabPanel>
  </div>
 
</TabContext>
</div>
  )}

export default Tabchoice;