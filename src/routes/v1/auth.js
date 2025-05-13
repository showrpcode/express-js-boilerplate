const express = require('express');
const { AuthController } = require('../../controllers');
const loginAuthUser = require('../../middlewares/auth-user');
const router = express.Router();

router.post('/login', loginAuthUser, AuthController.login);

module.exports = router;