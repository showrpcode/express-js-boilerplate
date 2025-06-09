const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();

router.get('/', UserController.getUsers);

module.exports = router;