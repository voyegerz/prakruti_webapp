import React from 'react'
import ProgressBar from './ProgressBar/ProgressBar'
import BotResponse from './BotResponse/BotResponse'
import UserResponse from './UserResponse/UserResponse'
import TextArea from './TextArea/TextArea'
import './chatbody.css'

export default function ChatBody() {
  return (
      <ul id='chat-body'>
          <ProgressBar/>
          <BotResponse/>
          <UserResponse/>
          <TextArea/>
      </ul>
  )
}
