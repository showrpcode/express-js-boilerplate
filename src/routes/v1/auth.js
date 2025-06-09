const express = require('express');
const { AuthController } = require('../../controllers');
const { loginUser, renewToken } = require('../../middlewares/validation');
const { authLimiter } = require('../../middlewares');
const router = express.Router();

// rate limit
router.use(authLimiter);

router.post('/login', loginUser, AuthController.login);
router.post('/renew-token', renewToken, AuthController.renewToken);

module.exports = router;