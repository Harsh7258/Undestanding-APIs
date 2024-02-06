const express = require('express');
const userController = require('../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/signup').post(userController.signup);
router.route('/login').post(userController.login);
router.route('/current-user').get(authController.validateToken ,userController.currentUser);

module.exports = router;