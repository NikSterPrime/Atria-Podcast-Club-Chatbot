import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import Header from './components/Header';
import Content from './components/Content.jsx'
import './styles/Chatbot.css';
import './styles/App.css';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="main-page">
      <Header />
      <Content />
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
