const mongoose = require('mongoose');

const TYPES = ['GMAIL', 'TOKOPEDIA', 'SHOPEE', 'BUKALAPAK'];

const AccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email',
      ],
    },
    password: {
      type: String,
      required: true,
    },
    type: [
      {
        type: String,
        enum: TYPES,
      },
    ],
    phone: String,
  },
  {
    timestamps: { createdAt: 'created_at' },
  },
);

module.exports = mongoose.model('Account', AccountSchema);
