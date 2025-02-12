"use strict";

const mongoose = require("mongoose");

const { countConnect, checkOverload } = require("../helpers/check.connect"); // check number of connections
const {
  db: { host, port, name },
} = require("../configs/config.mongodb.js");
const connectString = `mongodb://${host}:${port}/${name}"`;
console.log(connectString);

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = `mongodb`) {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log(
          `Connected to mongodb successfully proooo!`,
          countConnect()
        );
        checkOverload();
      })
      .catch((err) => {
        console.error(`Failed to connect to mongodb: ${err}`);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}
const instanceMongodb = new Database();
module.exports = instanceMongodb;
