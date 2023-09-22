import React from 'react'
import SendButton from './icons8-send-64.png'
import './textarea.css'

export default function TextArea() {
  return (
    <div id="prompt-container">
      <textarea id='text-area' placeholder='Learn about Ayurveda...'/>
      <button id='send-button'>
        <img src={SendButton} alt="send" />
      </button>
    </div>
  )
}
