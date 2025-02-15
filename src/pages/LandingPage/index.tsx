import React, { JSX } from 'react';
import { Interests } from '../../modules/Interests';
import { Header } from '../../modules/Header';
export const LandingPage = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Interests />
    </div>
  );
};
