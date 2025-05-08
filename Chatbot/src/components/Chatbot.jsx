import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css';

function Chatbot({ visible }) {
  const [query, setQuery] = useState('');
  const [responses, setResponses] = useState([
    {
      title: "👋 Hi there! I'm your podcast assistant. Ask me about AI, gaming, clubs, or anything at Atria!",
      spotify: "",
      youtube: "",
      type: "greeting"
    }
  ]);

  const sendQuery = async () => {
    if (!query.trim()) return;
  
    try {
      const res = await axios.post('http://localhost:5000/query', { query });
  
      if (res.data.length === 0) {
        setResponses([
          {
            title: `😕 Sorry, I couldn't find any podcasts related to "${query}". Try asking about clubs, AI, events, or leadership.`,
            spotify: "",
            youtube: "",
            type: "notfound"
          }
        ]);
      } else {
        setResponses(res.data);
      }
  
      setQuery('');
    } catch (error) {
      console.error("Error:", error);
      setResponses([
        {
          title: "🚨 Something went wrong. Please try again later.",
          spotify: "",
          youtube: "",
          type: "error"
        }
      ]);
    }
  };
  

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={`chatbot-container ${visible ? 'chatbot-show' : 'chatbot-hide'}`}>
      <div className="chatbot-header">🎙️ Atria Podcast Bot</div>

      <div className="chatbot-body">
        {responses.map((item, index) => (
          <div
            className={`chatbot-response ${
    item.type === 'greeting'
      ? 'chatbot-greeting'
      : item.type === 'notfound'
      ? 'chatbot-notfound'
      : item.type === 'error'
      ? 'chatbot-error'
      : ''
  }`}
            key={index}
          >
            <strong>{item.title}</strong>
            <div className="response-buttons">
              {item.spotify && (
                <button onClick={() => openLink(item.spotify)}>🎧 Spotify</button>
              )}
              {item.youtube && (
                <button onClick={() => openLink(item.youtube)}>📺 YouTube</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about podcasts..."
          onKeyDown={(e) => e.key === 'Enter' && sendQuery()}
        />
        <button onClick={sendQuery}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
