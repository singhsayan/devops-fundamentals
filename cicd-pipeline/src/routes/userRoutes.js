const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers'); // Corrected import

// Route to get all users
router.get('/', userControllers.getUsers);

// Route to add a new user
router.post('/', userControllers.addUser);

module.exports = router;