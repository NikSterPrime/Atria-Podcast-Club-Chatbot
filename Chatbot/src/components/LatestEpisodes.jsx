import React from "react";
import Slider from "react-slick";
import "./component_styles/latestepisode.css"; // create this file

const episodes = [
  {
    title: "Breaking the Silence",
    description: "An open talk on mental health with our guest speaker.",
    image: "/ep1.jpg",
    link: "https://open.spotify.com/episode/xyz"
  },
  {
    title: "Voices of the Campus",
    description: "Atria students speak on college life and passions.",
    image: "/ep2.jpg",
    link: "https://open.spotify.com/episode/abc"
  },
  {
    title: "Tech Talks",
    description: "Insights on AI, robotics and the future.",
    image: "/ep3.jpg",
    link: "https://open.spotify.com/episode/123"
  },
  {
    title: "Inspiring Women",
    description: "Empowering stories from campus leaders.",
    image: "/ep4.jpg",
    link: "https://open.spotify.com/episode/456"
  },
  {
    title: "Creators' Den",
    description: "Talks with student artists and creators.",
    image: "/ep5.jpg",
    link: "https://open.spotify.com/episode/789"
  }
];

function LatestEpisodes() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="latest-episodes">
      <h2>🎙️ Latest Episodes</h2>
      <Slider {...settings}>
        {episodes.map((ep, index) => (
          <div key={index} className="episode-card">
            <img src={ep.image} alt={ep.title} className="episode-img" />
            <div className="episode-info">
              <h3>{ep.title}</h3>
              <p>{ep.description}</p>
              <a href={ep.link} target="_blank" rel="noopener noreferrer">Listen Now</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestEpisodes;
