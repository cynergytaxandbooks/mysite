import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import TaxServices from './pages/TaxServices';
import Bookkeeping from './pages/Bookkeeping';
import About from './pages/About';
import TaxChecklist from './pages/TaxChecklist';
import Legal from './pages/Legal';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tax-services" element={<TaxServices />} />
          <Route path="/bookkeeping" element={<Bookkeeping />} />
          <Route path="/about" element={<About />} />
          <Route path="/checklist" element={<TaxChecklist />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;