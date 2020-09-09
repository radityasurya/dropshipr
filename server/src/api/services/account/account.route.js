const express = require('express');
const httpStatus = require('http-status');
const base64 = require('js-base64');
const asyncHandler = require('express-async-handler');

const account = require('./account.controller');

const router = express.Router();

router
  .route('/')
  .get(asyncHandler(account.findAll))
  .post(asyncHandler(account.create));

router
  .route('/:id')
  .get(asyncHandler(account.get))
  .put(asyncHandler(account.update))
  .delete(asyncHandler(account.remove));

module.exports = router;
