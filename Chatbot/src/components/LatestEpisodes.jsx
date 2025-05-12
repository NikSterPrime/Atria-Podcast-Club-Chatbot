import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./component_styles/latestepisode.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LatestEpisodes() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/youtube/latest")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched YouTube videos:", data); // Add this line
      setVideos(data);
    })
    .catch(err => console.error("Fetch error:", err));
}, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }]
  };

  return (
    <div className="latest-episodes">
      <h2>📺 Latest Episodes</h2>
      <Slider {...settings}>
        {videos.map((video, i) => (
          <div className="episode-card">
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            />
            <div className="video-info">
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
            </div>
          </div>

        ))}
      </Slider>
    </div>
  );
}

export default LatestEpisodes;
