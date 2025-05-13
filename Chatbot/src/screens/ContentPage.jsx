import React,{useState} from 'react';
import '../styles/ContentPage.css';
import Header from '../components/Header';
import YoutubeEpisodes from '../components/YoutubeEpisodes';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

function ContentPage() {
  const [visible, setVisible] = useState(false);
  return (
    <div className='content-page'>
      <div className='headerdiv'>
        <Header />
        <YoutubeEpisodes />
      </div>
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
      <Footer />
    </div>
  );
}

export default ContentPage;
