const express = require('express');
const httpStatus = require('http-status');
const base64 = require('js-base64');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const path = require('path');

const account = require('./account.controller');

const router = express.Router();

const dirUpload = path.join(process.cwd(), '/uploads');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, dirUpload);
  },
  filename: (req, file, callback) => {
    now = new Date();
    currentDate = now.toISOString().slice(0, 10);
    callback(null, `${currentDate}-${file.originalname}`);
  },
});

const uploadMulter = multer({ storage });

router
  .route('/')
  .get(asyncHandler(account.findAll))
  .post(asyncHandler(account.create));

router.route('/upload').post(uploadMulter.single('file'), account.upload);

router
  .route('/:id')
  .get(asyncHandler(account.get))
  .put(asyncHandler(account.update))
  .delete(asyncHandler(account.remove));

module.exports = router;
