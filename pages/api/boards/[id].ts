import { IResponse } from "interfaces/api.model";
import connectDB from "middleware/dbconnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { Board, BoardModel } from "interfaces/board.model";
import { UserModel } from "interfaces/user.model";
import { useRouter } from "next/router";
import { SectionModel } from "interfaces/boardsection.model";
import { TaskModel } from "interfaces/task.model";
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  await getBoardById(req, res);
};

const getBoardById = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  try {
    const { id } = req.query;
    const boards: Board = await BoardModel.findOne({ _id: id })
      .sort({ date: "desc" })
      .populate({ path: "users", select: "-password", model: UserModel })
      .populate({
        path: "sections",
        model: SectionModel,
        populate: {
          path: "tasks",
          model: TaskModel,
          populate: {
            path: "users",
            model: UserModel,
            select: "-password",
          },
        },
      });
    return res.status(200).send({ success: true, body: boards });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, error: error });
  }
};

export default connectDB(handler);
