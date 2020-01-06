const lint = require('./jest-eslint.config');
const test = require('./jest-test.config');

module.exports = {
  collectCoverageFrom: ['**/packages/**/**.js'],
  projects: [lint, test],
  verbose: true
};
