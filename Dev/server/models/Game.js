const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  developer: {
    type: String,
    required: true,
    unique: true,
  }, 
  releaseDate: {
    type: Date,
    required: true,
  },
  genres: {
    type: [String]
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Question'
    }
  ],
});

const Game = model('Game', gameSchema);

module.exports = Game;