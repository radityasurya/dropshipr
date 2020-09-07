const express = require('express');
const base64 = require('js-base64');
const httpStatus = require('http-status');
const asyncHandler = require('express-async-handler');
const scraper = require('../../utils/scraper');

const router = express.Router();

router.route('/').get(
  asyncHandler(async (req, res) => {
    const scraped = await scraper.scrapeShopee();
    res.status(httpStatus.OK).send({
      message: 'List of accounts',
      password: base64.encode('asdewq123'),
      hasil: scraped,
    });
  }),
);

module.exports = router;
