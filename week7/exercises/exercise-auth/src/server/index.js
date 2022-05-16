require("dotenv").config();
const debug = require("debug")("items:server");
const chalk = require("chalk");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/errors");

const app = express();

const startServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

app.use(morgan("dev"));
app.use(helmet());

app.use(notFoundError);
app.use(generalError);

module.exports = startServer;
