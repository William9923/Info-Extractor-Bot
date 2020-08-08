const { chain } = require('bottender');

const { find } = require('./usecase/find');
const { instruction } = require('./usecase/instruction');
const { event } = require('./line/event');

module.exports = async () => {
  return chain([find, instruction, event]);
};
