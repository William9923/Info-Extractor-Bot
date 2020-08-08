const axios = require('axios').default;
const util = require('util');
const urlExists = util.promisify(require('url-exists'));

const { textParser, urlParser } = require('./parser');

const api = process.env.API_HOST;
const version = process.env.VERSION;

module.exports.text = async (command) => {
  const [keyword, content] = textParser(command);
  const params = new URLSearchParams({
    algo: 'regex',
    keyword: keyword,
    content: content,
  }).toString();
  return axios
    .get(api + '/api/' + version + '/text/?' + params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

module.exports.scraper = async (command) => {
  const [keyword, url] = urlParser(command);
  let isExists = await urlExists(url);
  if (!isExists) {
    throw {
      message: 'URL not exist',
      error: 'url',
    };
  }

  const params = new URLSearchParams({
    algo: 'regex',
    keyword: keyword,
    url: url,
  }).toString();
  return axios
    .get(api + '/api/' + version + '/scraper/?' + params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
