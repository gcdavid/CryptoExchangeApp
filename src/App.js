import Navbar from './components/Navbar';
import Crypto from './pages/Crypto';
import BuyCrypto from './components/BuyCrypto';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ExchangeCrypto from './components/ExchangeCrypto';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/crypto' element={<Crypto/>}/>
    <Route path='/buy' element={<BuyCrypto/>}/>
    <Route path='/exchange' element={<ExchangeCrypto/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
