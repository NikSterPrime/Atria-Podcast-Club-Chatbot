// src/App.jsx
import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import './styles/Chatbot.css';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && <Chatbot />}
      <button
        className="chatbot-toggle-button"
        onClick={() => setVisible(!visible)}
      >
        <img
          src={visible ? '/aditya.png' : '/aditya.png'}
          alt="Chat Toggle"
          className="chatbot-icon"
        />
      </button>
    </>
  );
}

export default App;
