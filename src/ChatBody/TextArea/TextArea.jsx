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
      // Simulate "thinking" delay
      const thinkingTimeout = setTimeout(() => {
        setIsBotThinking(false);
        addChatMessage(botResponse, 'bot-response');
        setUserMessage(''); // Clear the input field after displaying bot's response
        scrollToTop();
      }, 1500); // Adjust the delay as needed
      return () => clearTimeout(thinkingTimeout);
    }
  }, [isBotThinking, botResponse, addChatMessage]);

  const handleChat = async () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    // Add the user's message to the chat with a "user-response" className
    addChatMessage(trimmedMessage, 'user-response');

    // Set the flag to indicate that the bot is thinking
    setIsBotThinking(true);

    try {
      // Send a POST request to your API
      const response = await fetch('https://voyegerz.pythonanywhere.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: trimmedMessage }),
      });

      if (response.ok) {
        // Parse the response JSON data
        const data = await response.json();

        // Set the bot's response (replace with actual bot response)
        setBotResponse(data.response);
      } else {
        // Handle API error
        console.error('Oops! Something went wrong with the bot.');
        setBotResponse('Oops! Something went wrong with the bot.');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Oops! Something went wrong while connecting to the server.', error);
      setBotResponse('Oops! Something went wrong while connecting to the server.');
    }
  };

  const scrollToTop = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =  chatContainerRef.current.scrollHeight ;
    }
  };

  const chatB = document.getElementById('chat-body')
  if(chatB){
    chatB.scrollTop = chatB.scrollHeight
  }

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
              e.preventDefault(); // Prevents a newline in the textarea
              handleChat();
            }
          }} // Call handleKeyDown on key press
        />
        <button onClick={handleChat} id='send-button'>
          <img src={SendButton} alt="send" />
        </button>
        {isBotThinking && <p className="bot-response">Thinking...</p>}
      </div>
    </div>
  );
}
