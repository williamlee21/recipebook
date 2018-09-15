"use strict";

const express = require("express");
const path = require("path");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");

const { db } = require("./db");
const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, "../public")));

// app.use("/api", require("./api")); // include our routes!
app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

// sync database
db.sync().then(() => {
  console.log("db synced");
  app.listen(7000, () => console.log("Listening on port 7000"));
});

// app.listen(4000, () => console.log("...listening on port 4000"));
