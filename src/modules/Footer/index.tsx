import React from 'react';
import { JSX } from 'react';
import '../Footer/styles/style.css';
import PhoneIcon from '../../assets/icons/footer-phone-icon.svg';
import MailIcon from '../../assets/icons/footer-mail-icon.svg';

export const Footer = (): JSX.Element => {
  return (
    <section className="footer-section-wrapper">
      <div className="footer-links">
        {['Політка Конфіденційності', 'Умови використання', 'Політка файлів cookie', 'Авторські права'].map((text) => (
          <p className="footer-text" key={text}>
            {text}
          </p>
        ))}
      </div>

      <div className="footer-info-container">
        <div className="footer-info-copirate">
          <p>© Growth Marketing Associate 2025</p>
        </div>

        <div className="footer-info-contact">
          <div className="footer-icon-text">
            <div className="footer-input-icon">
              <img src={PhoneIcon} alt="Phone icon" />
            </div>
            <p className="footer-text">0 800 358 497 (безкоштовно)</p>
          </div>

          <p className="footer-text">+38 050 324 04 84 — Адміністратор Ірина Кабакова</p>

          <div className="footer-icon-text">
            <div className="footer-input-icon">
              <img src={MailIcon} alt="Mail icon" />
            </div>
            <p className="footer-text">support@it-sprout.org.ua</p>
          </div>
        </div>
      </div>
    </section>
  );
};
