const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');

const cors = require('cors');

const routes = require('../routes');
const config = require('./config');

const app = express();

// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(helmet());

// request logging. dev: console | production: file
// app.use(morgan('combined'));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// Use middleware to set the default Content-Type
app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

app.get('/', (req, res) =>
  res.send(
    JSON.stringify({
      name: 'Dropshipr API',
      version: config.version,
    }),
  ),
);

app.use('/api', routes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status || 500,
  });
  next(err);
});

module.exports = app;
