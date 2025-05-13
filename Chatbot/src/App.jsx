import React, { useState } from 'react';
import './components/component_styles/Chatbot.css';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './screens/Home';
import Content from './screens/ContentPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Content" element={<Content />} />
      </Routes>
    </Router>
  );
}

export default App;
