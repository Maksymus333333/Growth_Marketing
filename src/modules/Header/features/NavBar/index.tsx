import React from 'react';
import { JSX } from 'react';
import '../NavBar/styles/style.css';
import { NavLink } from 'react-router-dom';

export const NavBar = (): JSX.Element => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Про курс
          </NavLink>
        </li>
        <li>
          {/* <NavLink to="/mentor" className={({ isActive }) => (isActive ? 'active' : '')}> */}
          Ментор
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}> */}
          Контакти
          {/* </NavLink> */}
        </li>
        <li>
          {/* <NavLink to="/program" className={({ isActive }) => (isActive ? 'active' : '')}> */}
          Програма
          {/* </NavLink> */}
        </li>
      </ul>
    </nav>
  );
};
