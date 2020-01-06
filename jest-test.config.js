const model = require('./packages/model/jest.config');

module.exports = {
  verbose: true,
  projects: [model],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
