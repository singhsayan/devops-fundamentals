const {getShard } = require("../config/db");

const createShortURL = async (longURL, shortURL) => {
    const db = getShard(shortURL);
    await db.query("INSERT INTO urls (short_url, long_url, clicks) VALUES ($1, $2, 0)", [shortURL, longURL]);
};

const getLongURL = async (shortURL) =>{
    const db = getShard(shortURL);
    const result = await db.query("select long_url FRON urls WHERE short_url = $1", [shortURL]);
    return result.rows.length ? result.rows[0].long_url : null;
};


const incrementClickCount = async (shortUrl) => {
    const db = getShard(shortUrl);
    await db.query("UPDATE urls SET clicks = clicks + 1 WHERE short_url = $1", [shortUrl]);
  };
  
  module.exports = { createShortUrl, getLongUrl, incrementClickCount };