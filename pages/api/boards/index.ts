import { IResponse } from "interfaces/api.model";
import connectDB from "middleware/dbconnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { Board, BoardModel } from "interfaces/board.model";
import { UserModel } from "interfaces/user.model";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  if (req.method === "POST") {
    await addBoard(req, res);
  } else {
    await getLatestBoards(req, res);
  }
};

const getLatestBoards = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  try {
    const boards: Board[] = await BoardModel.find()
      .sort({ date: "desc" })
      .limit(5)
      .populate({ path: "users", select: "-password", model: UserModel });
    return res.status(200).send({ success: true, body: boards });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, error: error });
  }
};

const addBoard = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  const { title, description, isPrivate } = req.body;
  if (title && description) {
    try {
      let board = new BoardModel({
        title,
        description,
        isPrivate: isPrivate ? isPrivate : false,
      });
      let boardCreated: Board = await board.save();
      return res.status(200).send({ success: true, body: boardCreated });
    } catch (error) {
      console.log(error);

      return res.status(500).send({ success: false, error: error });
    }
  } else {
    res.status(422).send({ success: false, error: "Missing data" });
  }
};
export default connectDB(handler);
