import { IResponse } from "interfaces/api.model";
import connectDB from "middleware/dbconnect";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { User, UserModel } from "interfaces/user.model";
import { Schema, model, connect, Error } from "mongoose";
import { verifyToken } from "./middleware/auth";

const saltRounds = 10;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  if (req.method === "POST") {
    await addUser(req, res);
  } else {
    await getUsers(req, res);
  }
};

const getUsers = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  try {
    const token = req?.headers?.authorization?.replace("Bearer ", "").trim();
    const auth = verifyToken(token);
    if (!auth) {
      return res.status(401).send({ success: false, error: "Unauthorized" });
    }
    console.log(auth);
    const users: User[] = await UserModel.find();
    return res.status(200).send({ success: true, body: users });
  } catch (error) {
    console.log(error);

    return res.status(500).send({ success: false, error: error });
  }
};

const addUser = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  const { name, email, password, avatar } = req.body;
  if (name && email && password) {
    try {
      const passwordhash = await bcrypt.hash(password, saltRounds);
      let user = new UserModel({
        name,
        email,
        password: passwordhash,
        avatar,
      });
      let usercreated: User = await user.save();
      return res.status(200).send({ success: true, body: usercreated });
    } catch (error) {
      console.log(error);

      return res.status(500).send({ success: false, error: error });
    }
  } else {
    res.status(422).send({ success: false, error: "Missing data" });
  }
};
export default connectDB(handler);
