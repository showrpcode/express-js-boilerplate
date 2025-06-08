const express = require('express');
const { AuthController } = require('../../controllers');
const { loginUser } = require('../../middlewares/validation');
const router = express.Router();

router.post('/login', loginUser, AuthController.login);

module.exports = router;