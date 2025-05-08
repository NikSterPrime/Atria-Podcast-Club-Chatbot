const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const podcasts = require('./podcasts.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/query', (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required." });
  }

  const keywords = query.toLowerCase().split(' ');

  // Match tags to keywords
  const results = podcasts.filter(podcast =>
    podcast.tag.some(tag =>
      keywords.some(keyword => tag.toLowerCase().includes(keyword))
    )
  );

  // Send a simplified result
  const simplified = results.map(p => ({
    title: p.title,
    youtube: p.yturl,
    spotify: p.spotifyurl
  }));

  res.json(simplified);
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
