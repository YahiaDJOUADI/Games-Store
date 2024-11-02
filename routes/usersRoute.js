const express = require('express');
const router = express.Router();
const authController = require('../controllers/registerController');

router.get('/register', authController.registerPage);
router.post('/register', authController.registerUser);

module.exports = router;
