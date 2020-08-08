const { router, route, text } = require('bottender/router');
const constants = require('.././line/constant');

async function HelpInstruction(context) {
  return await context.sendText(constants.HELP);
}

async function FindInstruction(context) {
  return await context.sendText(constants.FIND);
}

module.exports.instruction = (context, { next }) => {
  // add any new additional information here
  return router([
    text(/^!help/i, HelpInstruction),
    text(/^(!find).*/i, FindInstruction),
    route('*', next),
  ]);
};
