require("dotenv").config();
const debug = require("debug")("gamersland:server:initializeServer");
const chalk = require("chalk");
const app = require(".");

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on port ${port}`));
      resolve();
    });

    server.on("error", (error) => {
      debug(chalk.red("Error on server"));
      if (error.code === "EADDRINUSE") {
        debug(chalk.red(`Port ${port} in use`));
        reject();
      }
    });
  });

module.exports = initializeServer;
