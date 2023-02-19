import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import EarlyDays from "./pages/EarlyDays";
import { EarlyDaysData } from './components/EarlyDaysData';
import KlamathDays from './pages/KlamathDays';
import { KlamathDaysData } from './components/KlamathDaysData';
import CrossCountry from './pages/CrossCountry';
import { CrossCountryData } from './components/CrossCountryData';
import Durham from './pages/Durham';
import { DurhamData } from './components/DurhamData';
import Marlborough from './pages/Marlborough';
import { MarlboroughData } from './components/MarlboroughData';
import Distance from './pages/Distance';
import { DistanceData } from './components/DistanceData';
import Future from './pages/Future';

import './App.css';

function App() {
  
    return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/earlydays"} element={<EarlyDays slides={EarlyDaysData}/>} />
            <Route path={'/klamathdays'} element={<KlamathDays slides={KlamathDaysData} />} />
            <Route path={'/crosscountry'} element={<CrossCountry slides={CrossCountryData}/>} />
            <Route path={'/durham'} element={<Durham slides={DurhamData}/>} />
            <Route path={'/marlborough'} element={<Marlborough slides={MarlboroughData}/>} />
            <Route path={'/distance'} element={<Distance slides={DistanceData}/>} />
            <Route path={'/future'} element={<Future />} />
          </Routes>
      </BrowserRouter>
    )
}

export default App;
