import React from 'react';
import { JSX } from 'react';
import '../MainText/styles/style.css';

export const MainText = (): JSX.Element => {
  return (
    <div className="main-text-wrapper">
      <h1>
        Шукаю початківців для менторства у сфері
        <p className="second-h1">Growth Marketing Associate</p>
      </h1>
      <p className="bottom-text">
        Привіт! Я хочу допомогти тим, хто тільки починає свій шлях у сфері росту та маркетингу.
      </p>
    </div>
  );
};
