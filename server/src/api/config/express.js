const express = require('express');
const cors = require('cors');

const routes = require('../routes');
const config = require('./config');

const app = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Use middleware to set the default Content-Type
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/', (req, res) => res.send(
  JSON.stringify({
    name: 'Dropshipr API',
    version: config.version,
  }),
));

app.use('/api', routes);

module.exports = app;
