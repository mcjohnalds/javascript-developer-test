const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = (urls) => Promise.all(urls.map(getArnieQuote));

const getArnieQuote = async (url) => {
  const response = await httpGet(url);
  const message = JSON.parse(response.body).message;
  if (response.status === 200) {
    return { 'Arnie Quote': message };
  } else {
    return { FAILURE: message };
  }
};

module.exports = {
  getArnieQuotes,
};
