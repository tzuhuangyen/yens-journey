import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Navbar from './layout/Navbar/Navbar';
import Footer from './layout/Footer/Footer';

import Home from './pages/Home/Home';
import Travel from './pages/Travel/Travel';
import TravelArticle from './pages/TravelArticle/TravelArticle';
import Tech from './pages/Tech/Tech';
import TechDetail from './pages/Tech/TechDetail';
import Parenting from './pages/Parenting/Parenting';
import About from './pages/About/About';
import Affiliate from './pages/Affiliate/Affiliate';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/travel/:slug' element={<TravelArticle />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/tech/:slug' element={<TechDetail />} />
          <Route path='/parenting' element={<Parenting />} />
          <Route path='/about' element={<About />} />
          <Route path='/affiliate' element={<Affiliate />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;
