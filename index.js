const getMostPopularMovies = require('./crawlers/mostPopularMovies');
const registerMoviesTopick = require('./Controllers/MoviesController');

async function teste() {
  const moviesTopicks = await getMostPopularMovies();
  console.log(moviesTopicks.titles, moviesTopicks.images);
}

teste()