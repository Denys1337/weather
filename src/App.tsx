import { FC } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Highlights from './components/highlights/Highlights';
import LeftBar from './components/LeftBar/LeftBar';
import Map from './components/Map/Map';
import Switchtemp from './components/switch/Switchtemp';
import Tab from './components/Tab/Tabchoice';
import { Store } from './store';



const App:FC = () => {
  const data= useSelector((state: Store) => state?.testReducer?.coord);
  const {lat,lon} = data;

  return (
    <div className="App">
      <LeftBar/>
      <div>
            <Tab/>      
          <div className="content">
             <Highlights/>
            <Map lat={lat} lon={lon} />
          </div>  
      </div>
         <Switchtemp/>
        
      
    </div>
  );
}

export default App;
