const express = require('express');
const authRoutes = require('./auth');
const validateApiKey = require('../../middlewares/validate-api-key');
const router = express.Router();

router.use(validateApiKey);
router.use('/auth', authRoutes);

module.exports = router;