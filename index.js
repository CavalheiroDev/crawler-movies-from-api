const getMostPopularMovies = require('./crawlers/mostPopularMovies');
const { registerMoviesTopick } = require('./Controllers/MoviesController');
const mongoose = require('mongoose');

async function teste() {
  const moviesTopicks = await getMostPopularMovies();

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/moviesTopicks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => console.log('Conectado, meu querido!'))
    .catch((error) => console.log('Calma lá né querido!', error));

  for (let index = 0; index < moviesTopicks.titles.length; index++) {
    registerMoviesTopick(moviesTopicks.titles[index], moviesTopicks.images[index]);
  }

  return;
};

teste();