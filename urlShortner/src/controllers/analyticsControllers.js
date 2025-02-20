const { getShard } = require("../config/db");

exports.getAnalytics = async (req, res) => {
  const { shortUrl } = req.params;
  const db = getShard(shortUrl);
  const result = await db.query("SELECT clicks FROM urls WHERE short_url = $1", [shortUrl]);

  if (!result.rows.length) return res.status(404).json({ error: "URL Not Found" });

  res.json({ shortUrl, clicks: result.rows[0].clicks });
};