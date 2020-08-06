const { router, route, text } = require('bottender/router');

async function HelpInstruction(context) {
    return await context.sendText('Help Instruction');
}

async function FindInstruction(context) {
    return await context.sendText('Find Instruction!');
}

module.exports.instruction = function Instruction(context, { next }) {
    // add any new additional information here
    return router([
        text(/^!help/i, HelpInstruction),
        text(/^(!find).*/i, FindInstruction),
        route('*', next),
    ])
}
