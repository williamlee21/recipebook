const Sequelize = require("sequelize");
const db = require("../db");

const Recipe = db.define("recipe", {
  name: {
    type: Sequelize.STRING
  },
  ingredients: {
    type: Sequelize.TEXT
  },
  directions: {
    type: Sequelize.TEXT
  }
});

module.exports = Recipe;
