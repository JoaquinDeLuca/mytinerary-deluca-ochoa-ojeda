import './App.css';
// importo las dos paginas new

import Home from './pages/Home';
import Cities from './pages/Cities';
import UnderConstruction from './pages/UnderConstruction';
import NewCity from './pages/NewCity';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebsiteLayouts from './layouts/WebsiteLayouts';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <WebsiteLayouts>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='*' element={<UnderConstruction />} /> */}
        <Route path='/cities' element={<Cities/>} />
        <Route path='/City'   element={<City/>}/>
        <Route path='/newcity' element={<NewCity />} />
      </Routes>
      </WebsiteLayouts>
    </BrowserRouter>
  );
}

export default App;
