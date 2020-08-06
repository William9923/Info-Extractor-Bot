const { router, route } = require('bottender/router');

const { text, scraper } = require('../util/fetcher');

function isCommand(flag, Action) {
    return route(context => context.event.text.match(`^!find\\s+--k\\s+[0-9A-Za-z]+\\s+--${flag}\\s+.*\\s*`), Action)
}

function createResult(res) {
    let response = "";
    console.log(res);
    let seperator = res.metadata.seperator.toString();

    response += "Pattern Matching Result : \n";
    res.answer.forEach((r) => {
        response += r.replace(seperator, "") + "\n";
    });

    response += "Stats : " + "\n";
    Object.keys(res.stats).forEach(function (key) {
        response += key + " : " + res.stats[key] + "\n";
    });
    return response;
}

async function MatchText(context) {
    await context.sendText("Please wait ...")
    let res = await text(context.event.text);
    let response = createResult(res);
    
    return await context.sendText(response);
}

async function MatchURL(context) {
    await context.sendText("Please wait ...")
    let res = await scraper(context.event.text)
    let response = createResult(res);
    
    return await context.sendText(response);
}

module.exports.find = function Find(context, { next }) {
    return router([
        // add any command here
        isCommand('t', MatchText),
        isCommand('u', MatchURL),
        route('*', next)
    ]);
}

