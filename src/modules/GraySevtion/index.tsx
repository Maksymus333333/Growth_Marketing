import React from 'react';
import { JSX } from 'react';
import './stales/styles.css';

export const GraySection = (): JSX.Element => {
  return (
    <section className="gray-section-wrapper">
      <div className="gray-section-container">
        <h3 className="gray-section-title">
          Я РОЗРОБЛЮ ДЛЯ ТЕБЕ ПРОГРАМУ НАВЧАННЯ, ЯКА ДОПОМОЖЕ ОВОЛОДІТИ НАВИЧКАМИ
          <span className="gray-weight-text"> GROWTH MARKETING ASSOCIATE </span>
          ТА ЗРОБИТИ ПЕРШІ КРОКИ В ЦІЙ СФЕРІ
        </h3>
      </div>
    </section>
  );
};
