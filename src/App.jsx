import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Travel from './pages/Travel/Travel';
import AI from './pages/AI/AI';
import Frontend from './pages/Frontend/Frontend';
import Parenting from './pages/Parenting/Parenting';
// import About from './pages/About/About';
import Affiliate from './pages/Affiliate/Affiliate';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/ai' element={<AI />} />
          <Route path='/frontend' element={<Frontend />} />
          <Route path='/parenting' element={<Parenting />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/affiliate' element={<Affiliate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
