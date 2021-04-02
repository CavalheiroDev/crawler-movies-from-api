const fetchHTML = require('./fetchHTML');
const cheerio = require('cheerio');

async function getMostPopularMovies() {
  const html = await fetchHTML('https://www.imdb.com/chart/moviemeter');

  const $ = cheerio.load(html);

  let moviesDetails = {
    titles: $('.titleColumn > a').map(function () {
      return $(this).text();
    }).get(),
    pageDetails: $('.titleColumn').map(function () {
      let link = `https://www.imdb.com${$(this).find('a').attr('href')}`
      return link;
    }).get()
  }

  return moviesDetails;
}

module.exports = getMostPopularMovies;
