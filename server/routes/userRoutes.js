const express = require('express');
const router = express.Router();

const { authUser, registerUser } = require('../controllers/userControllers');

const { protect, admin } = require('../middlewares/authMiddleware');

router.post('/login', authUser);

router.post('/register', registerUser);

module.exports = router;
