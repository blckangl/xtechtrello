import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const connectDB =
  (handler: (arg0: NextApiRequest, arg1: NextApiResponse<any>) => any) =>
  async (req: NextApiRequest, res: NextApiResponse<any>) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(MONGODB_URI);
    return handler(req, res);
  };

export default connectDB;
