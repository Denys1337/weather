import React, { FC } from 'react';
import Highlights from '../highlights/Highlights';
import Switchtemp from '../switch/Switchtemp';
import Tabchoice from '../Tab/Tabchoice';

const WeatherDetails:FC = () => {

  return (
    <div>
      <div>
            <Tabchoice/>      
          <div className="content">
             <Highlights/>
          </div>  
      </div>
         <Switchtemp/>
    </div>
  );
};

export default WeatherDetails;
