import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quantri from '../layouts/Quantri';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quantri" element={<Quantri />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
