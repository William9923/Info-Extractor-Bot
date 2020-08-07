const { router, route } = require('bottender/router');

async function HandleUnknown(context) {
  return await context.sendText(
    `Unknown Command or Invalid Command ${String.fromCodePoint(0x10001c)}`
  );
}

module.exports.unknown = () => {
  // handling unknown
  return router([route('*', HandleUnknown)]);
};
