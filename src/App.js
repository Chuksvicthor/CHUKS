import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './component/home';
import { About } from './component/about';
import { Pricing } from './component/pricing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Store } from './component/store';

AOS.init();
function App() {
  return ( 
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/store' element={<Store></Store>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/pricing' element={<Pricing></Pricing>}> </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
