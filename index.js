const getMostPopularMovies = require('./crawlers/mostPopularMovies');
const { registerMoviesTopick } = require('./Controllers/MoviesController');
const mongoose = require('mongoose');

getMostPopularMovies().then((moviesTopicks) => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/movies', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
    .then(() => {
      console.log('Conectado, meu querido!')
      for (let index = 0; index < moviesTopicks.titles.length; index++) {
        let rank = index + 1;
        registerMoviesTopick(rank, moviesTopicks.titles[index], moviesTopicks.pageDetails[index]);
      }
      return;
    })
    .catch((error) => console.log('Calma lá né querido!', error));
});

