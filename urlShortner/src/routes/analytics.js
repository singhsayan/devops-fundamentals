import express from "express";
const router = express.Router();
const { getAnalytics } = require("../controllers/analyticsController");

router.get("/:shortUrl", getAnalytics);

module.exports = router;