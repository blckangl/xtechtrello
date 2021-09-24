import connectDB from "middleware/dbconnect";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "John Doe" });
};
export default connectDB(handler);
