const keywordRegex = /--k\s+[a-zA-Z0-9]+/g;
const contentRegex = /--t\s+.*\s*/g;
const urlRegex = /--u\s+.*\s*/g;


module.exports.textParser = (command) => {
    let content = []
    content.push(command.match(keywordRegex));
    content.push(command.match(contentRegex));

    content = content.map((reg) => {
        return reg.toString().replace(/--[a-z]\s+/g,"");
    });

    return [...content];
}

module.exports.urlParser = (command) => {
    let content = []
    content.push(command.match(keywordRegex));
    content.push(command.match(urlRegex));

    // check the url
    content = content.map((reg) => {
        return reg.toString().replace(/--[a-z]\s+/g,"");
    });

    return [...content];
}