import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Catalog from '../routes/Catalog';
import Home from '../routes/Home';
import About from '../routes/About';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default AppRouter;
