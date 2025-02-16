import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../../pages/LandingPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mentor" /* element={<Mentor />}*/ />
      <Route path="/contacts" /* element={<Contacts />}*/ />
      <Route path="/program" /* e element={<Program />}*/ />
    </Routes>
  );
};
