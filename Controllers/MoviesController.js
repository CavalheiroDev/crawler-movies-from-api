const mongoose = require('mongoose');
require('../Models/Topicks');
const Movie = mongoose.model('topicks');

function registerMoviesTopick(rank, name, urlPage) {

  const newMovie = {
    rank: rank,
    name: name,
    pageDetails: urlPage,
    topick: true
  };

  new Movie(newMovie).save()
    .then(() => console.log('Ta salvo, meu chapa!'))
    .catch((error) => console.log('Ta dando erro, pô!', error));

};

module.exports = {
  registerMoviesTopick
};