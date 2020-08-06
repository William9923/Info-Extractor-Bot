const axios = require('axios').default;
 
const { textParser, urlParser } = require('./parser');

const api = process.env.API_HOST;
const version = process.env.VERSION;

module.exports.text = (command) => {
    const [keyword, content] = textParser(command);
    const params = new URLSearchParams({
      algo: "regex",
      keyword: keyword,
      content: content
    }).toString();
    return axios.get(api + '/api/' + version + '/text/?' + params)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
}

module.exports.scraper = (command) => {
    const [keyword, url] = urlParser(command);

    const params = new URLSearchParams({
      algo: "regex",
      keyword: keyword,
      url: url
    }).toString();
    return axios.get(api + '/api/' + version + '/scraper/?' + params)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
}

