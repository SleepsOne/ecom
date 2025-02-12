require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");

//init express app
const app = express();

// console.log(`Process: `, process.env);

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db
require("./dbs/init.mongodb.js");

// init routes

app.get("/", (req, res, next) => {
  const str = "hello from duck";
  return res.status(200).json({
    message: "welcome to duck js",
    // metadata: str.repeat(10000),
  });
});

//handle errors

module.exports = app;
