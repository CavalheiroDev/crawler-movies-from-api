const axios = require('axios');

async function fetchHTML(url) {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error('Ocorreu um erro ao tentar capturar a URL:', url);
  }
};

module.exports = fetchHTML;