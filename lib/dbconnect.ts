import * as mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
let database: mongoose.Connection;

export const mongooseConnection = async (): Promise<mongoose.Connection> => {
  if (database) {
    return database;
  }

  await mongoose.connect(MONGODB_URI);
  database = mongoose.connection;
  return database;
};
