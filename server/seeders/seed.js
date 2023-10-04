const db = require("../config/connection");
const { Game } = require("../models");
const gameSeeds = require("./gameSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Game", "games");

    await Game.create(gameSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
