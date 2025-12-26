const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

// 🗂 Cache file location
// const CACHE_FILE = path.join(__dirname, "tweetsCache.json");

// 🧠 In-memory cache
let cachedTweets = null;
let lastFetched = 0;

// ⏳ Cache duration — change this easily
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
// const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// 🔄 Load previous cache (if available)
if (fs.existsSync(CACHE_FILE)) {
  const fileData = JSON.parse(fs.readFileSync(CACHE_FILE, "utf-8"));
  cachedTweets = fileData.data;
  lastFetched = fileData.timestamp;
}

app.get("/api/tweets", async (req, res) => {
  const now = Date.now();

  // ✅ Serve cached data if still valid
  if (cachedTweets && now - lastFetched < CACHE_DURATION) {
    console.log("⚡ Serving cached tweets");
    return res.json(cachedTweets);
  }

  try {
    const fetch = (await import("node-fetch")).default;

    const response = await fetch(
      `https://api.twitter.com/2/users/${process.env.TWITTER_USER_ID}/tweets?tweet.fields=text,attachments,created_at&expansions=attachments.media_keys&media.fields=url,preview_image_url`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        },
      }
    );

    const data = await response.json();

    // 🧱 Handle rate limits gracefully
    if (response.status === 429) {
      console.warn("🚫 Rate limited by Twitter. Serving cached version.");
      if (cachedTweets) return res.json(cachedTweets);
      return res
        .status(429)
        .json({ error: "Rate limited by Twitter — try again later" });
    }

    // 🧩 Save new data to cache + disk
    cachedTweets = data;
    lastFetched = now;
    fs.writeFileSync(
      CACHE_FILE,
      JSON.stringify({ data, timestamp: now }, null, 2)
    );

    console.log("✅ Cached fresh tweets from Twitter");
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching Twitter data:", err);
    if (cachedTweets) {
      console.log("⚠️ Serving last known cached data due to error.");
      return res.json(cachedTweets);
    }
    res.status(500).json({ error: "Failed to fetch Twitter data" });
  }
});

// 🖥️ Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
