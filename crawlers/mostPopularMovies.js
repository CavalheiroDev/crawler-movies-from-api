const fetchHTML = require('./fetchHTML');
const cheerio = require('cheerio');

async function getMostPopularMovies() {
  const html = await fetchHTML('https://www.imdb.com/chart/moviemeter');

  const $ = cheerio.load(html);

  let moviesDetails = {
    titles: $('.titleColumn > a').map(function () {
      return $(this).text();
    }).get(),
    images: $('.posterColumn').map(function () {
      return $(this).find('img').attr('src');
    }).get()
  }
  // for (let index = 0; index < moviesDetails.titles.length; index++) {
  //   console.log(moviesDetails.titles[index], moviesDetails.images[index]);
  // }
  return moviesDetails;
}

module.exports = getMostPopularMovies;