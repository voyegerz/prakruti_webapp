import React from 'react'
import './row.css'
import assessment from './icons/assessment.png'
import settings from './icons/settings.png'
import account from './icons/account.png'


export default function Row(props) {
  var icon = assessment;
  if (props.text === "Assessment"){
    icon = assessment;
  }else if(props.text === "Settings"){
    icon = settings;
  }else if(props.text === "Account"){
    icon = account;
  }

  return (
    <div className='row'>
        <img src={icon} className='icon' alt="" />
        <p className='text'>{props.text}</p>
        <div className='indicator'></div>
    </div>
  )
}
