import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import Image404 from '../../assets/images/page-404.png';
import { GoMain404 } from './features/GoMain';

export const Page404 = (): JSX.Element => {
  return (
    <section className="page-404-container-wrapper">
      <div className="page-404-container">
        <img src={Image404} className="image-404" alt="Image404" />
        <div className="text-container-404">
          <div className="page-404-text">
            <h2 className="h2-404">Ой! Сталася помилка</h2>
            <p className="bottom-text-404">
              Можливо сторінка була видалена, її назву змінено, або вона тимчасово недоступна. Перевірте URL на помилки
              або поверніться на Головну
            </p>
          </div>
          <GoMain404 />
        </div>
      </div>
    </section>
  );
};
