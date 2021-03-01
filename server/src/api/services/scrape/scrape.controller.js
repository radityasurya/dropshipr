const base64 = require('js-base64');
const httpStatus = require('http-status');
const Joi = require('joi');

const scraper = require('../../utils/scraper');

const scrape = async (req, res) => {
  const scraped = await scraper.scrapeShopee();
  return res.json({
    result: scraped,
  });
};

module.exports = {
  scrape,
};
