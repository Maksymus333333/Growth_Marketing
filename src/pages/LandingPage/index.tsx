import React from 'react';

import { JSX } from 'react';
import { Interests } from '../../modules/Interests';
import './styles/styles.css';
import { MainSection } from '../../modules/MainSection';
import { Proposition } from '../../modules/Proposition';

import { GraySection } from '../../modules/GraySevtion';

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page-wrapper">
      <div className="full-width">
        <MainSection />
      </div>
      <Interests />
      <div className="full-width">
        <GraySection />
      </div>
      <Proposition />
    </div>
  );
};
