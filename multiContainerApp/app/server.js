const express = require('express');
const { Client } = require('pg');  
const app = express();

const db = new Client({  
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,  
    password: process.env.DB_PASSWORD
});

db.connect();

app.get("/", (req, res) => {
    res.send("Hello from Node.js with PostgreSQL");
});

app.get("/users", async (req, res) => { 
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
