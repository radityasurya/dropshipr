const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();

router.route('/').get((req, res) =>
  res.status(httpStatus.OK).send({
    message: 'List of accounts',
  }),
);

module.exports = router;
