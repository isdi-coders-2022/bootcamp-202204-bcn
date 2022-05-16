require("dotenv").config();
const debug = require("debug")("items:root");
const chalk = require("chalk");
const connectDB = require("./database");
const startServer = require("./server");

const port = process.env.SERVER_PORT || 3000;
const mongoConnection = process.env.MONGODB_STRING;

(async () => {
  try {
    await connectDB(mongoConnection);
    await startServer(port);
  } catch (error) {
    debug(chalk.red(`Error: `, error.message));
  }
})();
