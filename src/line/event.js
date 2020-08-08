const { router, line } = require('bottender/router');
const constants = require('./constant');

module.exports.event = () => {
  return router([line.follow(HandleFollow), line.join(HandleJoin)]);
};

async function HandleFollow(context) {
  return await context.sendText(constants.FOLLOW);
}

async function HandleJoin(context) {
  return await context.sendText(constants.FOLLOW);
}
