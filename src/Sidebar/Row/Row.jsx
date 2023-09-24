import React from 'react';
import './row.css';
import assessment from './icons/assessment.png';
import settings from './icons/settings.png';
import account from './icons/account.png';
import ask from './icons/ask_us.png';

export default function Row(props) {
  const { text, isActive, onClick } = props;

  var icon = assessment;
  if (text === "Assessment") {
    icon = assessment;
  } else if (text === "Settings") {
    icon = settings;
  } else if (text === "Account") {
    icon = account;
  } else if (text === "Ask") {
    icon = ask;
  }

  const handleClick = () => {
    onClick(text); // Notify the parent component of the row click
  };

  return (
    <div
      className={`row ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={icon} className='icon' alt="" />
      <p className='text'>{text}</p>
      <div className={`${isActive ? 'indicator' : ''}`}></div>
    </div>
  );
}
