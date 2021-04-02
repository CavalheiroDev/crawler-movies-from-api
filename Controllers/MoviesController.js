const mongoose = require('mongoose');
require('../Models/Movie');
const Movie = mongoose.model('movies');

function registerMoviesTopick(rank, name, imageUrl) {

  const newMovie = {
    rank: rank,
    name: name,
    image: imageUrl,
    topick: true
  };

  new Movie(newMovie).save()
    .then(() => console.log('Ta salvo, meu chapa!'))
    .catch((error) => console.log('Ta dando erro, pô!', error));

};

module.exports = {
  registerMoviesTopick
};