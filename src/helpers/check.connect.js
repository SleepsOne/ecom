"use strict";
const _SECONDS = 5000;
const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

// count connections
const countConnect = () => {
  const numberConnections = mongoose.connections.length;
  console.log(`Number of connections: ${numberConnections}`);
};

// check over load

const checkOverload = () => {
  setInterval(() => {
    const numberConnections = mongoose.connections.length;
    const numCors = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

    // max number of connections based on the number of cor cpu

    const maxConnections = numCors * 5;

    if (numberConnections > maxConnections) {
      console.log(
        `Warning: Overload, number of connections: ${numberConnections}`
      );
      // send notification
      // or restart the server
    } else {
      console.log(`Number of connections: ${numberConnections}`);
    }
  }, _SECONDS);
};

module.exports = { countConnect, checkOverload };
