import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowsMs: 1 * 60 * 1000, // 1 minute
    max: 100, // limiting each IP to 100 requests per minute
    message: "Too many requests, try again later"
});

module.exports = limiter;