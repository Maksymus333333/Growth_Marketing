import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import { useNavigate } from 'react-router-dom';

export const LogInButton = (): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/thanks');
  };
  return (
    <button className="login-button" onClick={handleClick}>
      <p>Записатися</p>
    </button>
  );
};
