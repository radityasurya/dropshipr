const mongoose = require('mongoose');
const colors = require('colors'); // eslint-disable-line no-unused-vars
const { mongo } = require('./config');

mongoose.Promise = Promise;

const mongoUri = mongo.host;
const db = mongoose.connection;

// print mongoose logs in dev env
if (mongo.debug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    mongo.debug(`${collectionName}.${method}`, mongo.util.inspect(query, false, 20), doc);
  });
}

db.on('connected', (err) => {
  console.log('Successfully connected to the database!'.green);
});

db.on('disconnected', (err) => {
  console.log('Disconnected to the database!'.red);
});

db.on('reconnected', (err) => {
  console.log('Database reconnected'.green);
});

db.on('error', (err) => {
  throw new Error(`unable to connect to database: ${mongoUri}`.red);
});

exports.connect = () => {
  mongoose.connect(
    mongoUri,
    {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

  return db;
};
