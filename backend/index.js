const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const podcasts = require('./podcasts.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// === Chatbot route (unchanged) ===
app.post('/query', (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required." });
  }

  const keywords = query.toLowerCase().split(' ');

  const results = podcasts.filter(podcast =>
    podcast.tag.some(tag =>
      keywords.some(keyword => tag.toLowerCase().includes(keyword))
    )
  );

  const simplified = results.map(p => ({
    title: p.title,
    youtube: p.yturl,
    spotify: p.spotifyurl
  }));

  res.json(simplified);
});

// === New YouTube route ===
app.get('/api/youtube/latest', async (req, res) => {
  try {
    const { YOUTUBE_API_KEY, CHANNEL_ID } = process.env;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

    const response = await axios.get(url);
    const videos = response.data.items.filter(item => item.id.kind === "youtube#video");

    res.json(videos);
  } catch (error) {
    console.error("YouTube API error:", error.message);
    res.status(500).json({ error: "Failed to fetch YouTube videos" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

// === All YouTube Episodes Route ===
app.get('/api/youtube/all', async (req, res) => {
  try {
    const { YOUTUBE_API_KEY, CHANNEL_ID } = process.env;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=25`;

    const response = await axios.get(url);
    const videos = response.data.items.filter(item => item.id.kind === "youtube#video");
    // Include the corresponding Spotify URL from your podcasts.json
    const enrichedVideos = videos.map(video => {
      // Match the video title or some other identifier with the podcasts.json data
      const podcast = podcasts.find(p =>p.title.toLowerCase().trim() === video.snippet.title.toLowerCase().trim());
      return {
        ...video,
        spotify: podcast ? podcast.spotifyurl : ''
      };
    });

    res.json(enrichedVideos);
  } catch (error) {
    console.error("YouTube API error (all):", error.message);
    res.status(500).json({ error: "Failed to fetch all YouTube videos" });
  }
});

