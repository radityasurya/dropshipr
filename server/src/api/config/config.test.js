process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const config = require('./config');

describe('Config', () => {
  it('should get config object', () => {
    expect(config).to.be.an('object');
  });
});
