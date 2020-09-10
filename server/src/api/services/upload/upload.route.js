const express = require('express');
const httpStatus = require('http-status');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const csv = require('fast-csv');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const Account = require('../account/account.model');
const upload = require('./upload.controller');

const dirUpload = path.join(process.cwd(), '/uploads');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, dirUpload);
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadMulter = multer({ storage });

router.route('/').post(uploadMulter.single('file'), upload.saveCSV);

module.exports = router;
