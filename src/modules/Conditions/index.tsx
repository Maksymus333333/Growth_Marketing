import React from 'react';
import { JSX } from 'react';
import './styles/style.css';

export const ConditionsSection = (): JSX.Element => {
  return (
    <section className="conditions-section-wrapper">
      <h2 className="h2-conditions-text">Умови:</h2>
      <div className="conditions-list">
        <div className="list-points">
          <div className="gap-container">
            <div className="point-restangle-container">
              <span className="point-restangle" />
            </div>
          </div>
          <div className="point-text-container">
            <p className="point-text">
              Рівень англійської мови від <span className="b2-bold">B2</span>.
            </p>
          </div>
        </div>

        <div className="list-points">
          <div className="gap-container">
            <div className="point-restangle-container">
              <span className="point-restangle" />
            </div>
          </div>
          <div className="point-text-container">
            <p className="point-text">
              Це абсолютно безкоштовно, але я можу взяти максимум двох людей, щоб забезпечити якісний менторинг.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
