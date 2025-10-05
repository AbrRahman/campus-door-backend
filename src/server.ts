import { Server } from "http";
import app from "./app";

import mongoose from "mongoose";
import config from "./app/config";
let server: Server;

const main = async () => {
  try {
    // database connection
    await mongoose
      .connect(config.db_connection_ser as string)
      .then(() => {
        console.log("db connection successfully");
      })
      .catch((err) => {
        console.log("db connection field");
      });

    server = app.listen(config.port, () => {
      console.log(`app is listening port ${config.port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};

// main function call
main();
