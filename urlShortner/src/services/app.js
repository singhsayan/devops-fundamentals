import express from "express";
const app = express();
const limiter = require("./middleware/rateLimiter");

app.use(express.json());
app.use(limiter);

app.use("/api/url", require("./routes/urlRoutes"));
app.use("/api/analytics", require("./routes/analytics"));

module.exports = app;