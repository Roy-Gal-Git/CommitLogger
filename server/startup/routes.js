const express = require("express");
const github = require("../routes/github");
const helloWorld = require("../routes/helloWorld");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/github", github);
  app.use("/", helloWorld);
};