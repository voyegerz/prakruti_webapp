import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import BotResponse from './BotResponse/BotResponse';
import UserResponse from './UserResponse/UserResponse';
import TextArea from './TextArea/TextArea';
import BotAvatar from '../Sidebar/logo-prakruti.png'
import UserAvatar from '../Header/profile.svg'
import './chatbody.css';


export default function ChatBody() {
  const [chatMessages, setChatMessages] = useState([]);

  // Function to add a new chat message to the state
  const addChatMessage = (message, className) => {
    const newMessage = { message, className };
    setChatMessages([...chatMessages, newMessage]);
  };

  return (
    <div className="main">
      <ul id='chat-body'>
        <ProgressBar />
        <BotResponse />
        <UserResponse />
        {chatMessages.map((message, index) => (
          <li key={index} className={`chat ${message.className}`}>
            {message.className === 'user-response' ? (
              <>
                <div className="options">
                  <p id='option-1'>{message.message}</p>
                  {/* Add other options here */}
                </div>
                <img src={UserAvatar} className='user-avatar' alt='User Avatar' />
              </>
            ) : (
              <>
                <img src={BotAvatar} className='bot-avatar' alt='Bot Avatar' />
                <p>{message.message}</p>
              </>
            )}
          </li>
        ))}
      </ul>
      <TextArea addChatMessage={addChatMessage} />
    </div>
  );
}
