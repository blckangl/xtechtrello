import { IResponse } from "interfaces/api.model";
import connectDB from "middleware/dbconnect";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { User, UserModel } from "interfaces/user.model";
import jwt from "jsonwebtoken";

const KEY = process.env.JWT_KEY ? process.env.JWT_KEY : "";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  if (req.method === "POST") {
    await login(req, res);
  }
};

const login = async (req: NextApiRequest, res: NextApiResponse<IResponse>) => {
  try {
    const { email, password } = req.body;
    const currUser: User = await UserModel.findOne({ email: email });
    console.log(email);
    if (currUser) {
      console.log(currUser.password);
      console.log(password);
      bcrypt
        .compare(password, currUser.password ? currUser.password : "")
        .then((isAuth) => {
          if (isAuth) {
            currUser.password = undefined;
            const payload = {
              id: currUser._id,
              email: currUser.email,
              name: currUser.name,
              avatar: currUser.avatar,
              create: currUser.created_at,
            };

            jwt.sign(
              payload,
              KEY,
              {
                expiresIn: 31556926,
              },
              (err: any, token: string | undefined) => {
                return res.status(200).json({
                  success: true,
                  body: { payload: { ...payload, token } },
                });
              }
            );
          } else {
            return res
              .status(401)
              .send({ success: false, error: "Wrong email/password" });
          }
        });
    } else {
      return res.status(400).send({ success: false, error: "User Not Found" });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).send({ success: false, error: error });
  }
};

export default connectDB(handler);
