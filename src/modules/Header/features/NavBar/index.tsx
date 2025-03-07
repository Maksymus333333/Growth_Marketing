import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../../../../assets/icons/burger_menu.svg'; // Іконки для бургер-меню
import '../NavBar/styles/style.css';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        <img src={Menu} alt="menu icon" />
      </button>

      <ul className={`navbar ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Про курс
          </NavLink>
        </li>
        <li>Ментор</li>
        <li>Контакти</li>
        <li>Програма</li>
      </ul>
    </nav>
  );
};
