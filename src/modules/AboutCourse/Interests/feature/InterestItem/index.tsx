import React from 'react';
import './styles/styles.css';

interface InterestItemProps {
  iconSrc: string;
  backgroundColor: string;
  description: string;
}

export const InterestItem = ({ iconSrc, backgroundColor, description }: InterestItemProps) => {
  return (
    <div className="interests-item">
      <div className="interests-icon">
        <img style={{ backgroundColor }} src={iconSrc} alt="Interest Icon" />
      </div>
      <p>{description}</p>
    </div>
  );
};
