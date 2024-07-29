const express = require('express');
const urlController = require('../controllers/url');
const router = express.Router();
const { check, body } = require('express-validator');

router.get('/:shortenUrl(*)', urlController.getUrl)

router.post('/', [
    body('url', 'url is required').isURL().withMessage('Invalid url').notEmpty()
], urlController.postUrl)


module.exports = router;