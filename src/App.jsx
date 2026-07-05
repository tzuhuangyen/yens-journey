import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import FlightSearch from './pages/FlightSearch/FlightSearch';
import Blog from './pages/Blog/Blog';
import Travel from './pages/Travel/Travel';
import Affiliate from './pages/Affiliate/Affiliate';
// import About from './pages/About/About';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/flights' element={<FlightSearch />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/affiliate' element={<Affiliate />} />
          {/* <Route path='/about' element={<About />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
