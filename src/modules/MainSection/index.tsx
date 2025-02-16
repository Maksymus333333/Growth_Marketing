import React from 'react';
import { JSX } from 'react';
import '../MainSection/styles/style.css';
import { LogIn } from '../Shared/LogInButton';
import { MainText } from './features/MainText';

export const MainSection = (): JSX.Element => {
  return (
    <section className="main-section-wrapper">
      <div className='main-section-container'>
      <MainText/>
      <div className="login">
      <LogIn/>
      </div>
      </div>
      
    </section>
  );
}; 
