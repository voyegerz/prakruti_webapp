import React from 'react'
import './botresponse.css'
import BotAvatar from '../../Sidebar/logo-prakruti.png'

export default function BotResponse() {
  return (
    <li className='bot-response'>
      <img src={BotAvatar} className='bot-avatar' alt="" />
      <p>How is your energy level ?</p>
    </li>
  )
}
