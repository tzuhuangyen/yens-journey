// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

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

// 掃描 pages/ 底下所有 *Guide.jsx 檔案
const guideModules = import.meta.glob('./pages/*Guide.jsx');

// 依 slug 找到對應模組，回傳 lazy component
function loadGuideBySlug(slug) {
  const entry = Object.entries(guideModules).find(([path]) =>
    path.toLowerCase().includes(slug.toLowerCase()),
  );
  return entry ? lazy(entry[1]) : null;
}

const BudapestGuide = loadGuideBySlug('budapest');
const ItalyGuide = loadGuideBySlug('italy');
const FranceGuide = loadGuideBySlug('france');

// 用 lazy 載入你的 Admin 後台元件
const Admin = lazy(() => import('./pages/Admin'));

function App() {
  return (
    <HashRouter>
      <Navbar />

      <main>
        <Suspense
          fallback={
            <div style={{ padding: '4rem', textAlign: 'center' }}>
              載入中...
            </div>
          }
        >
          <Routes>
            {/* 1. 後台管理隱藏路由 (放在最上面優先匹配) */}
            <Route path='/yen-admin' element={<Admin />} />

            {/* 2. 前台公開路由 */}
            <Route path='/' element={<Home />} />
            <Route path='/travel' element={<Travel />} />
            <Route path='/travel/:slug' element={<TravelArticle />} />

            {BudapestGuide && (
              <Route path='/destinations/hungary' element={<BudapestGuide />} />
            )}
            {ItalyGuide && (
              <Route path='/destinations/italy' element={<ItalyGuide />} />
            )}
            {FranceGuide && (
              <Route path='/destinations/france' element={<FranceGuide />} />
            )}

            <Route path='/tech' element={<Tech />} />
            <Route path='/tech/:slug' element={<TechDetail />} />
            <Route path='/parenting' element={<Parenting />} />
            <Route path='/about' element={<About />} />
            <Route path='/affiliate' element={<Affiliate />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;
