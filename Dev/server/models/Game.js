const { Schema, model } = require("mongoose");

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
    type: [String],
  },
  URL: {
    type: String,
    required: false,
    unique: true,
  },
});

const Game = model("Game", gameSchema);

module.exports = Game;
