import React from 'react';
import { JSX } from 'react';
import '../Proposition/styles/style.css';
import DariaPimkina from '../../assets/images/daria-pimkina.svg';
import ListItem1 from '../../assets/icons/list-1.svg';
import ListItem2 from '../../assets/icons/list-2.svg';
import ListItem3 from '../../assets/icons/list-3.svg';
import ListItem4 from '../../assets/icons/list-4.svg';
import ListItem5 from '../../assets/icons/list-5.svg';
import { LogIn } from '../Shared/LogInButton';

export const Proposition = (): JSX.Element => {
  return (
    <section className="proposition-section-wrapper">
      <div className="left-side">
        <img src={DariaPimkina} className="daria-pimkina" alt="Daria Pimkina" />
      </div>

      <div className="right-side">
        <h2 className="proposition-text">Що я пропоную?</h2>

        <div className="proposition-list">
          <div className="list-items">
            <img src={ListItem1} />
            <p>Персоналізовану навчальну програму, адаптовану під твій рівень.</p>
          </div>
          <div className="list-items">
            <img src={ListItem2} />
            <p>Регулярні менторські сесії для розбору складних тем і підтримки.</p>
          </div>
          <div className="list-items">
            <img src={ListItem3} />
            <p>Практичні завдання, які підготують до реальної роботи.</p>
          </div>
          <div className="list-items">
            <img src={ListItem4} />
            <p>Допомогу в створенні портфоліо та розвитку професійних навичок.</p>
          </div>
          <div className="list-items">
            <img src={ListItem5} />
            <p>
              Сприяння в працевлаштуванні на прямі контракти в закордонні компанії з місячною зарплатою від $4,000 до
              $6,500.
            </p>
          </div>
          <LogIn />
        </div>
      </div>
    </section>
  );
};
