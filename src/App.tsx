import React from 'react';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import { CookieConsent } from './modules/CookieConsent';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CookieConsent />
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
