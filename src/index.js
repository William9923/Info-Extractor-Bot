const { chain } = require('bottender');

const { find } = require('./usecase/find');
const { instruction } = require('./usecase/instruction');
const { unknown } = require('./usecase/unknown');

module.exports = async () => {
  return chain([find, instruction, unknown]);
};
