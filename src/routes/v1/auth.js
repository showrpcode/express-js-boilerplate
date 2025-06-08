const express = require('express');
const { AuthController } = require('../../controllers');
const { loginUser } = require('../../middlewares/validation');
const { authLimiter } = require('../../middlewares');
const router = express.Router();

// rate limit
router.use(authLimiter);

router.post('/login', loginUser, AuthController.login);

module.exports = router;