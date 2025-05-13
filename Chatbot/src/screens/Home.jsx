import React,{useState} from "react";
import Chatbot from '../components/Chatbot';
import Header from '../components/Header';
import Content from '../components/Content.jsx';
import LatestEpisode from '../components/LatestEpisodes.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/Home.css'

function Home(){
    const [visible, setVisible] = useState(false);
    return(
    <div className="main-page">
        <div className='Picturebackground_content'>
            <Header />
            <Content />
        </div>
        <LatestEpisode /> 
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
        <Footer />
    </div>
    )
}

export default Home;