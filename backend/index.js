import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCN4RQ2t7V63RWQFdxAm1Liw'; // Your channel ID

app.get('/latest-video', async (req, res) => {
  try {
    let mainVideoId = null;

    // 1. Try current live stream
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();

    if (data.items && data.items.length > 0) {
      mainVideoId = data.items[0].id.videoId;
    } else {
      // 2. Try most recent completed livestream
      url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=1&key=${API_KEY}`;
      response = await fetch(url);
      data = await response.json();

      if (data.items && data.items.length > 0) {
        mainVideoId = data.items[0].id.videoId;
      }
    }

    // 3. Get list of recent completed livestreams for thumbnails
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=5&key=${API_KEY}`;
    response = await fetch(url);
    const thumbsData = await response.json();

    res.json({
      videoId: mainVideoId,
      thumbnails: thumbsData.items || [],
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});