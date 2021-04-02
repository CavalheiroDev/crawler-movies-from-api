const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  topick: {
    type: Boolean,
    required: true
  }
});

mongoose.model('movies', MovieSchema);
