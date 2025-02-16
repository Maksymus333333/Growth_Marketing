import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookieConsent } from './modules/CookieConsent';
import { Header } from './modules/Header';
import { AppRoutes } from './global/router/Routes';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CookieConsent />
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
