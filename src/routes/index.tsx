import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';

const routes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default routes;
