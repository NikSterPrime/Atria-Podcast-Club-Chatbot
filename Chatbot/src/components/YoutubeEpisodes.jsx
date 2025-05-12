import React, { useEffect, useState } from 'react';
import './component_styles/YoutubeEpisodes.css';

function YoutubeEpisodes() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/youtube/all")
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  return (
    <div className="youtube-episodes">
      <h2 className="content-title">🎥 All Podcast Episodes</h2>

      <div className="video-list">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video-list-card ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <div className="video-left">
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-right">
                <h3>{video.snippet.title}</h3>
                <p className="video-date">{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                <p className="video-description">
                {video.snippet.description.length > 300
      ?         `${video.snippet.description.slice(0, 300)}...`
                : video.snippet.description}
                </p>
                {/* Add Spotify button if link is available */}
                {video.spotify && (
                <a href={video.spotify} target="_blank" rel="noopener noreferrer">
                <button className="spotify-btn">Listen on Spotify</button>
                </a>
  )}
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoutubeEpisodes;
