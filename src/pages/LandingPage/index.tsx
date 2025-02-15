import React from 'react';

import { JSX } from 'react';
import { Header } from '../../modules/Header';
import { Interests } from '../../modules/Interests';
import './styles/styles.css';

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page-wrapper">
      <Header />
      <Interests />;<div></div>
    </div>
  );
};
