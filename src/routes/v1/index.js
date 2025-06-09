const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const userRoutes = require('./user');
const { AuthUser } = require('../../middlewares');

router.use('/auth', authRoutes);
// after login secure routes
router.use(AuthUser);
router.use('/users', userRoutes);

module.exports = router;