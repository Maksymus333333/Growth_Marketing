import React, { JSX } from 'react';
import './styles/style.css';
import Logo from '../../assets/images/Union.svg';

export const Header = (): JSX.Element => {
  return (
    <header className="header-wrapper">
      <div className="logo_navigation">
        <div className="logo">
          <img src={Logo} />
        </div>
        <nav>
          <ul className="navbar">
            <li>Про курс</li>
            <li>Ментор</li>
            <li>Контакти</li>
            <li>Програма</li>
          </ul>
        </nav>
      </div>
      <div className="sign_up">
        <button className="sign_up_button">
          <p className="sign_up_text">Записатися</p>
        </button>
      </div>
    </header>
  );
};
