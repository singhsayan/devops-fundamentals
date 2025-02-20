// this file is used for main entry point 
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use('/users', userRoutes);

app.get('/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        if (user.rows.length > 0) {
            res.json(user.rows[0]);
        } 
        else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
