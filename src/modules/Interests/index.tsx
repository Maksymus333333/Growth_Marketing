import React from 'react';
import AiEditSpark from '../../assets/icons/AiEditSpark.svg';
import BrowthAdd from '../../assets/icons/browser-add--app-code.svg';
import HandHeld from '../../assets/icons/hand-held-tablet-drawing.svg';
import GoogleMedia from '../../assets/icons/google--media.svg';
import WebcamVideo from '../../assets/icons/webcam-video.svg';
import SendEmail from '../../assets/icons/send-email.svg';
import StartBadge from '../../assets/icons/star-badge.svg';
import BrowserWebsite from '../../assets/icons/browser-website.svg';
import GraduationCap from '../../assets/icons/graduation-cap.svg';

import './styles/styles.css';
import { InterestItem } from './feature/InterestItem';

const interestsData = [
  {
    iconSrc: AiEditSpark,
    backgroundColor: 'rgba(250, 111, 53, 0.25)',
    description: 'Цікавишся рерайтингом контенту за допомогою AI',
  },
  {
    iconSrc: HandHeld,
    backgroundColor: 'rgba(218, 80, 119, 0.25)',
    description: 'Бажаєш навчитися створювати креативи в Canva',
  },
  {
    iconSrc: BrowthAdd,
    backgroundColor: 'rgba(132, 160, 229, 0.25)',
    description: 'Готовий(-а) публікувати матеріали на WordPress',
  },
  {
    iconSrc: GoogleMedia,
    backgroundColor: 'rgba(255, 195, 101, 0.25)',
    description: 'Хочеш освоїти налаштування реклами в Google Ads',
  },
  {
    iconSrc: WebcamVideo,
    backgroundColor: 'rgba(192, 130, 242, 0.25)',
    description: "Маєш бажання створювати відео (не обов'язково, але буде плюсом)",
  },
  {
    iconSrc: SendEmail,
    backgroundColor: 'rgba(235, 146, 227, 0.25)',
    description: 'Прагнеш навчитися створювати презентації, оформлювати email-розсилки, лід-магніти та інше',
  },
  {
    iconSrc: StartBadge,
    backgroundColor: 'rgba(111, 212, 128, 0.25)',
    description: 'Отримуєш бонусні бали за досвід у тестуванні та звітності стратегій, креативів і цільових сторінок',
  },
  {
    iconSrc: BrowserWebsite,
    backgroundColor: 'rgba(142, 198, 237, 0.25)',
    description: 'Впевнено володієш формулами в Google Sheets/Excel та Google Slides',
  },
  {
    iconSrc: GraduationCap,
    backgroundColor: 'rgba(147, 197, 29, 0.25)',
    description: 'Готовий(-а) вчитися й докладати зусиль',
  },
];

export const Interests = () => {
  const chunkedInterests = [];
  const chunkSize = 3;
  for (let i = 0; i < interestsData.length; i += chunkSize) {
    chunkedInterests.push(interestsData.slice(i, i + chunkSize));
  }

  return (
    <section className="interests-wrapper">
      <div className="interests-container">
        <h2 className="interests-title">Якщо ти:</h2>
        {chunkedInterests.map((chunk, index) => (
          <div key={index} className="interests-columns">
            {chunk.map((item, i) => (
              <InterestItem
                key={i}
                iconSrc={item.iconSrc}
                backgroundColor={item.backgroundColor}
                description={item.description}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
