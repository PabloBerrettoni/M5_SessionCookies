const express = require('express');
const router = express.Router();
const controller = require('../controller/mainController');
const formValidator = require('../validators/formValidator');

router.get('/', controller.main);
router.post('/', /* formValidator, */ controller.postForm);

module.exports = router;