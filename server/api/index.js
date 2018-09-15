"use strict";
const apiRouter = require("express").Router();
const Recipe = require("../db/models/recipe");

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
apiRouter.get("/hello", (req, res) => res.send({ hello: "world" }));

//get recipe
apiRouter.get("/recipes", (req, res, next) => {
  Recipe.findAll()
    .then(recipes => res.json(recipes))
    .catch(next);
});

// add recipe
apiRouter.post("/add", (req, res, next) => {
  Recipe.create(req.body)
    .then(newRecipe => res.json(newRecipe))
    .catch(next);
});

// delete recipe
apiRouter.delete("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  Recipe.destroy({ where: { id } }).catch(next);
});

module.exports = apiRouter;
