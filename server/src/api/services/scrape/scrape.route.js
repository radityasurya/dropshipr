const express = require('express');
const httpStatus = require('http-status');
const base64 = require('js-base64');
const asyncHandler = require('express-async-handler');

const scrape = require('./scrape.controller');

const router = express.Router();

router.route('/').get(asyncHandler(scrape.scrape));

module.exports = router;
