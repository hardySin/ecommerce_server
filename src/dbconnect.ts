import mongoose from "mongoose";
import config from "./config/config";

let database: mongoose.Connection;
export const connect = () => {
  // add your own uri below
   if (database) {
    return;
  }
  mongoose.connect(config.mongo.url);
  database = mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
