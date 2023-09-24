import React, { useState, useEffect, useRef } from 'react';
import SendButton from './icons8-send-64.png';
import './textarea.css';

export default function TextArea({ addChatMessage }) {
  const [userMessage, setUserMessage] = useState('');
  const [isBotThinking, setIsBotThinking] = useState(false);
  const [botResponse, setBotResponse] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (isBotThinking) {
      const thinkingTimeout = setTimeout(() => {
        setIsBotThinking(false);
        addChatMessage(botResponse, 'bot-response');
        setUserMessage('');
      }, 1500);
      return () => clearTimeout(thinkingTimeout);
    }
  }, [isBotThinking, botResponse, addChatMessage]);

  const handleChat = async () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    addChatMessage(trimmedMessage, 'user-response');
    setIsBotThinking(true);

    try {
      const response = await fetch('https://voyegerz.pythonanywhere.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: trimmedMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        setBotResponse(data.response);
      } else {
        console.error('Oops! Something went wrong with the bot.');
        setBotResponse('Oops! Something went wrong with the bot.');
      }
    } catch (error) {
      console.error('Oops! Something went wrong while connecting to the server.', error);
      setBotResponse('Oops! Something went wrong while connecting to the server.');
    }
  };

  return (
    <div id="chat-container" className="chat-container">
      <div ref={chatContainerRef} className="chat-messages">
        {/* Your chat messages here */}
      </div>
      <div id="prompt-container">
        <textarea
          id='text-area'
          placeholder='Learn about Ayurveda...'
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleChat();
            }
          }}
        />
        <button onClick={handleChat} id='send-button'>
          <img src={SendButton} alt="send" />
        </button>
        {isBotThinking && <p className="bot-response">Thinking...</p>}
      </div>
    </div>
  );
}
