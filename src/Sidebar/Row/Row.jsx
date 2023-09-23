import React, { useState } from 'react';
import './row.css';
import assessment from './icons/assessment.png';
import settings from './icons/settings.png';
import account from './icons/account.png';
import ask from './icons/ask_us.png';

export default function Row(props) {
  const [isActive, setIsActive] = useState(false);

  var icon = assessment;
  if (props.text === "Assessment") {
    icon = assessment;
  } else if (props.text === "Settings") {
    icon = settings;
  } else if (props.text === "Account") {
    icon = account;
  } else if (props.text === "Ask") {
    icon = ask;
  }

  const handleClick = () => {
    // Toggle the active state when clicked
    setIsActive(!isActive);
    // Call the parent component's function to handle the click event
    props.onClick(props.text);
  };

  return (
    <div
      className={`row ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={icon} className='icon' alt="" />
      <p className='text'>{props.text}</p>
      <div className='indicator'></div>
    </div>
  );
}
