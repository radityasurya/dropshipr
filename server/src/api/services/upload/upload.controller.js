const base64 = require('js-base64');
const httpStatus = require('http-status');
const multer = require('multer');
const csv = require('fast-csv');
const fs = require('fs');
const path = require('path');

const dirUpload = path.join(process.cwd(), '/uploads');

const saveCSV = (req, res) => {
  const csvFilePath = path.join(dirUpload, req.file.filename);
  const stream = fs.createReadStream(csvFilePath);
  const csvData = [];
  const csvStream = csv
    .parse({ headers: true })
    .on('error', (err) => res.send(err))
    .on('data', (data) => csvData.push(data))
    .on('end', (rowCount) => {
      console.log(`Parsed ${rowCount} rows`);
      console.log(csvData);
      fs.unlinkSync(csvFilePath);
    });

  stream.pipe(csvStream);
};

module.exports = {
  saveCSV,
};
