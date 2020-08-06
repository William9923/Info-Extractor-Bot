const { chain } = require('bottender');

const { find } = require('./responsibility/find');
const { instruction } = require('./responsibility/instruction');
const { unknown } = require('./responsibility/unknown');

module.exports = async function App() {
  return chain([find, instruction, unknown]);
};

// function isCommand(flag, Action) {
//   return route(context => context.event.text.match(`^!find\\s+-k\\s+[0-9A-Za-z]+\\s+-${flag}\\s+.*\\s*`), Action)
// }

// function Find(context, { next }) {
//   return router([
//     // add any command here
//     isCommand('t', MatchText),
//     isCommand('u', MatchURL),
//     route('*', next)
//   ]);
// }

// function Instruction(context, {next}) {
//   // add any new additional information here
//   return router([
//     text('!help', HelpInstruction),
//     route('*', next),
//   ])
// }

// function Unknown(context) {
//   // handling unknown
//   return router([
//     route('*', HandleUnknown)
//   ])
// }

// async function HandleUnknown(context) {
//   return await context.sendText('Unknown Command or Invalid Command | Please add any kind of action you want to use');
// }
