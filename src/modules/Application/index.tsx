import React from 'react';
import { JSX } from 'react';
import './styles/style.css';
import { LogInButton } from '../Shared/LogInButton';

export const Application = (): JSX.Element => {
  return (
    <section className="application-section-wrappper">
      <div className="application-section-container">
        <div className="application-main-text">
          <div className="application-h2">
            <h2>Як подати заявку?</h2>
          </div>
          <div className="application-paragraph-text">
            <p>
              Напиши мені в особисті повідомлення, розкажи коротко про себе та свій досвід (навіть якщо його немає).
            </p>
          </div>
        </div>
        <div >
            <LogInButton style={{width:"185px", height:"60px"}}/>
        </div>
        
      </div>
    </section>
  );
};
