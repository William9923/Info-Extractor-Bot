const { chain } = require('bottender');

const { find } = require('./responsibility/find');
const { instruction } = require('./responsibility/instruction');
const { unknown } = require('./responsibility/unknown');

module.exports = async function App() {
  return chain([find, instruction, unknown]);
};
