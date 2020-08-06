const { router, route } = require('bottender/router');

async function HandleUnknown(context) {
  return await context.sendText(
    'Unknown Command or Invalid Command | Please add any kind of action you want to use'
  );
}

module.exports.unknown = function Unknown() {
  // handling unknown
  return router([route('*', HandleUnknown)]);
};
