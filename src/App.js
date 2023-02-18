import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import EarlyDays from "./pages/EarlyDays";
import KlamathDays from "./pages/KlamathDays";
import CrossCountry from './pages/CrossCountry';
import Durham from './pages/Durham';
import Marlborough from './pages/Marlborough';
import Distance from './pages/Distance';
import Future from './pages/Future';
import './App.css';

function App() {
  
    return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/early"} element={<EarlyDays />} />
            <Route path={'/klamath'} element={<KlamathDays />} />
            <Route path={'/crosscountry'} element={<CrossCountry />} />
            <Route path={'/durham'} element={<Durham />} />
            <Route path={'/marlborough'} element={<Marlborough />} />
            <Route path={'/distance'} element={<Distance />} />
            <Route path={'/future'} element={<Future />} />
          </Routes>
      </BrowserRouter>
    )
}

export default App;
