import React, { useState, useEffect, useCallback } from 'react';
import ReactGA from 'react-ga4';
import CookiesIcon from '../../assets/images/cookies.svg';
import './styles/styles.css';

const COOKIE_KEY = 'cookiesAccepted';
const GA_ID = 'G-XXXXXXXXXX'; //  ID Google Analytics

const initializeGA = () => {
  ReactGA.initialize(GA_ID);
  ReactGA.send('pageview');
};

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // check choice in cookies
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem(COOKIE_KEY);

    if (cookiesAccepted === null) {
      setIsVisible(true);
    } else if (cookiesAccepted === 'true') {
      initializeGA();
    }
  }, []);

  // confirm ookies
  const handleAccept = useCallback(() => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setIsVisible(false);
    initializeGA();
  }, []);

  // cancel cookies
  const handleReject = useCallback(() => {
    localStorage.setItem(COOKIE_KEY, 'false');
    setIsVisible(false);
  }, []);

  return isVisible ? (
    <div className="cookie-consent-wrapper">
      <img src={CookiesIcon} alt="Cookies ico" />
      <div className="cookie-message">
        <div className="cookie-text">
          <h2 className="cookie-main-title">Ми використовуємо файли cookies</h2>
          <p className="cookie-text-description">
            Деякі файли cookies необхідні для роботи сайту, а інші допомагають нам аналізувати трафік та персоналізувати
            контент. Ви можете налаштувати свої вподобання або прийняти всі файли cookies.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-buttons-confirm" onClick={handleAccept}>
            Прийняти всі Cookies
          </button>
          <button className="cookie-buttons-cancel" onClick={handleReject}>
            Відхилити
          </button>
          <button className="cookie-buttons-cancel">Налаштувати</button>
        </div>
      </div>
    </div>
  ) : null;
};
