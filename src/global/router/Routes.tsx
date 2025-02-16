import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../../pages/LandingPage';
import { ThanksPage } from '../../pages/ThanksPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/mentor" element={<Mentor />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/program" element={<Program />} /> */}
      <Route path="/thanks" element={<ThanksPage />} />
    </Routes>
  );
};
