const base64 = require('js-base64');
const httpStatus = require('http-status');
const Joi = require('joi');
const { json } = require('body-parser');

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
      status: httpStatus.BAD_REQUEST,
    });
  }

  value.password = base64.encode(value.password);

  const createdAccount = new Account(value);
  await createdAccount.save();

  // delete createdAccount.password;
  createdAccount.password = undefined;

  return res.json(createdAccount);
};

const findAll = async (req, res) => {
  const accounts = await Account.find({});

  try {
    return res.json(accounts);
  } catch (err) {
    return res.status(httpStatus.BAD_GATEWAY).send(err);
  }
};

const get = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id).exec();

    return res.status(httpStatus.OK).send(account);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND).send({
      message: 'Account not found',
    });
  }
};

const update = async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body);
  await account.save();

  return res.status(httpStatus.OK).send(account);
};

const remove = async (req, res) => {
  console.log(req.params.id);
  const account = await Account.findByIdAndDelete(req.params.id);

  if (!account) res.status(httpStatus.NOT_FOUND).send('No account found!');

  return res.status(httpStatus.OK).send({
    message: 'Account is successfully removed!',
  });
};

module.exports = {
  findAll,
  create,
  get,
  update,
  remove,
};
