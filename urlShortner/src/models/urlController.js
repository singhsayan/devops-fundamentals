const redisClient = require("../config/redis");
const { createShortUrl, getLongUrl, incrementClickCount } = require("../models/urlModel");

const shortid = require("shortid");

exports.shortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = shortid.generate().substring(0, 6);
  
  await createShortUrl(longUrl, shortUrl);
  await redisClient.setEx(shortUrl, 3600, longUrl); // Cache for 1 hour
  
  res.json({ shortUrl });
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;
  
  let longUrl = await redisClient.get(shortUrl);
  if (!longUrl) {
    longUrl = await getLongUrl(shortUrl);
    if (longUrl) await redisClient.setEx(shortUrl, 3600, longUrl);
  }

  if (!longUrl) return res.status(404).json({ error: "URL Not Found" });

  await incrementClickCount(shortUrl);
  res.redirect(longUrl);
};