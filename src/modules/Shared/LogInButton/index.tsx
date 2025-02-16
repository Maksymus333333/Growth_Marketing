import React from 'react';
import { JSX } from 'react';
import './styles/style.css';

interface StyleButtonLogin {
  style?: React.CSSProperties;
}

export const LogInButton = ({ style }: StyleButtonLogin): JSX.Element => {
  return (
    <button className="login-button" style={style}>
      <p>Записатися</p>
    </button>
  );
};
