import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CityCards from './components/LeftBar/citytoday/CityCards';
import Search from './components/LeftBar/search/Search';
import WeatherDetails from './components/weatherDetails/WeatherDetails';


const App: FC = () => {

  return (
    <div className="App">
       <Search />
      <BrowserRouter>
      
        <Routes>
          <Route path = '/' element= {<CityCards />}/>
          <Route path='/weather/:lat/:lon' element={<WeatherDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
