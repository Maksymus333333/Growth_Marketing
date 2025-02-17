import React from 'react';
import { JSX } from 'react';
import '../Proposition/styles/style.css';
import DariaPimkina from '../../assets/images/daria-pimkina.svg';
import ListItem1 from '../../assets/icons/list-1.svg';
import ListItem2 from '../../assets/icons/list-2.svg';
import ListItem3 from '../../assets/icons/list-3.svg';
import ListItem4 from '../../assets/icons/list-4.svg';
import ListItem5 from '../../assets/icons/list-5.svg';
import { LogInButton } from '../Shared/LogInButton';

const listItems = [
  { img: ListItem1, text: 'Персоналізовану навчальну програму, адаптовану під твій рівень.' },
  { img: ListItem2, text: 'Регулярні менторські сесії для розбору складних тем і підтримки.' },
  { img: ListItem3, text: 'Практичні завдання, які підготують до реальної роботи.' },
  { img: ListItem4, text: 'Допомогу в створенні портфоліо та розвитку професійних навичок.' },
  {
    img: ListItem5,
    text: 'Сприяння в працевлаштуванні на прямі контракти в закордонні компанії з місячною зарплатою від $4,000 до $6,500.',
  },
];

export const Proposition = (): JSX.Element => {
  return (
    <section className="proposition-section-wrapper">
      <div className="left-side">
        <img src={DariaPimkina} className="daria-pimkina" alt="Daria Pimkina" />
      </div>

      <div className="right-side">
        <h2 className="proposition-text">Що я пропоную?</h2>
        <div className="list-button-container">
          <div className="proposition-list">
            <ul>
              {listItems.map((item, index) => (
                <li key={index} className="list-item">
                  <img src={item.img} alt={`Number ${index + 1}`} />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <LogInButton />
        </div>
      </div>
    </section>
  );
};
