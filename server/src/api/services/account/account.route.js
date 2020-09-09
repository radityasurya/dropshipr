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

router.route('/test').get(
  asyncHandler(async (req, res, next) => {
    res.status(httpStatus.OK).send({
      message: 'List of accounts',
      password: base64.encode('asdewq123'),
    });
  }),
);

module.exports = router;
