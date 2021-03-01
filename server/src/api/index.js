// make bluebird default Promise
Promise = require('bluebird');

// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// connect to mongo db
mongoose.connect();

if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(
      // eslint-disable-line no-console
      `Dropshipr server started on port: ${config.port} (${config.env})`,
    );
  });
}

module.exports = app;
