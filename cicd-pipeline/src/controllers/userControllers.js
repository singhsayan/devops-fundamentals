// for controller logic

const pool = require('../models/userModel');

const getUsers = async (req,res) =>{
    try{
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
    
};

const addUser = async (req, res) =>{
    const {name, email} = req.body;
    try{
        const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',[name, email]);
        res.json(result.rows[0]);

    }
    catch(error){
        res.status(500).json({error: error.message});
    }
};  

module.exports = {getUsers, addUser};
