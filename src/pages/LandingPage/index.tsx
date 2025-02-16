import React from 'react';

import { JSX } from 'react';
import { Header } from '../../modules/Header';
import { Interests } from '../../modules/Interests';
import './styles/styles.css';
import { MainSection } from '../../modules/MainSection';
import { Proposition } from '../../modules/Proposition';


export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page-wrapper">
      <Header />
      <MainSection/>
      <Interests />;
      <Proposition/>
    </div>
  );
};
