const express = require('express');
const { Client } = require('pg');  // Fix import
const app = express();

const db = new Client({  // Fix database initialization
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,  // Use `database`, not `name`
    password: process.env.DB_PASSWORD
});

db.connect();

app.get("/", (req, res) => {
    res.send("Hello from Node.js with PostgreSQL");
});

app.get("/users", async (req, res) => {  // Fix async handling
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const PORT = process.env.PORT || 3000;  // Define PORT
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});