import './App.css';
import Highlights from './components/highlights/Highlights';
import LeftBar from './components/LeftBar/LeftBar';
import Switchtemp from './components/switch/Switchtemp';
import Tab from './components/Tab/Tabchoice';

function App() {
  return (
    <div className="App">
      <LeftBar/>
      <div>
          <Tab/>
          <Highlights/>  
      </div>
         <Switchtemp/>
        
      
    </div>
  );
}

export default App;
