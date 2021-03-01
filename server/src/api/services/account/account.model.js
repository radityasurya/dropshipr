const mongoose = require('mongoose');

const MARKETPLACE_TYPES = ['TOKOPEDIA', 'SHOPEE', 'BUKALAPAK'];

const AccountSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    marketplace: {
      type: String,
      enum: MARKETPLACE_TYPES,
      required: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      match: [
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email',
      ],
    },
    phone: String,
    bank: String,
    totalProducts: Number,
    pin: String,
    category: String,
  },
  {
    timestamps: { createdAt: 'created_at' },
  },
);

module.exports = mongoose.model('Account', AccountSchema);
