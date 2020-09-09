const base64 = require('js-base64');
const httpStatus = require('http-status');
const Joi = require('joi');

const scraper = require('../../utils/scraper');
const Account = require('./account.model');

const accountSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  password: Joi.string().min(4).required(),
  type: Joi.string(),
  phone: Joi.string(),
});

const create = async (req, res) => {
  const account = req.body;
  const { error, value } = await accountSchema.validate(account, {
    abortEarly: false,
  });

  if (error) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: 'Invalid account data',
    });
  }

  value.password = base64.encode(req.body.password);

  const createdAccount = new Account(value).save();
  delete createdAccount.password;

  return res.json(createdAccount);
};

const findAll = async (req, res) => {
  const scraped = await scraper.scrapeShopee();

  return res.json({
    message: 'List of accounts',
    password: base64.encode('asdewq123'),
    result: scraped,
  });
};

module.exports = {
  create,
  findAll,
};
