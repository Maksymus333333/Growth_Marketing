import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import { useNavigate } from 'react-router-dom';

interface StyleButtonLogin {
  style?: React.CSSProperties;
}

export const LogInButton = ({ style }: StyleButtonLogin): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/thanks');
  };
  return (
    <button className="login-button" onClick={handleClick} style={style}>
      <p>Записатися</p>
    </button>
  );
};
