import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import s from "./Tab.module.scss";
import Today from './today/Today';
import Week from './week/Week';

const Tabchoice = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
    <TabPanel value="1"><Today/></TabPanel>
    <TabPanel value="2"><Week/></TabPanel>
  </div>
 
</TabContext>
</div>
  )}

export default Tabchoice;