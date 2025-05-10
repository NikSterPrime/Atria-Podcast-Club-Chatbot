import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import './styles/Chatbot.css';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="main-page">
      {/* Main website content */}
      <div className="content">
        <h1>Welcome to the Atria Podcast Club</h1>
        <p>Explore our community stories, interviews, and leadership journeys.</p>
        <p>Use the chatbot below to discover content based on your interests!</p>
      </div>

      {/* Chatbot overlay (animated with slide effect) */}
      <Chatbot visible={visible} />

      {/* Toggle Button */}
      <button
        className="chatbot-toggle-button"
        onClick={() => setVisible(!visible)}
      >
        <img
          src={visible ? '/logo.jpg' : '/logo.jpg'}
          alt="Chat Toggle"
          className="chatbot-icon"
        />
      </button>
    </div>
  );
}

export default App;
