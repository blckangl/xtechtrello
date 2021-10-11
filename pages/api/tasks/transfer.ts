import { IResponse } from "interfaces/api.model";
import connectDB from "middleware/dbconnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { BoardSection, SectionModel } from "interfaces/boardsection.model";
import { Board, BoardModel } from "interfaces/board.model";
import { Task, TaskModel } from "interfaces/task.model";
import type { TaskType } from "interfaces/task.model";
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  if (req.method === "POST") {
    await transferTask(req, res);
  } else {
    res.status(400).send({ success: false, error: "Wrong request" });
  }
};

const transferTask = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  const { task, from, to } = req.body;
  if (task && from && to) {
    try {
      let newSection: BoardSection = await SectionModel.findOne({ _id: to });
      newSection.tasks.push(task);
      await SectionModel.findOneAndUpdate({ _id: newSection._id }, newSection);
      let oldSection: BoardSection = await SectionModel.findOne({ _id: from });
      oldSection.tasks = oldSection.tasks.filter((x) => x != task);
      await SectionModel.findOneAndUpdate({ _id: oldSection._id }, oldSection);

      return res.status(200).send({ success: true, body: "done" });
    } catch (error) {
      console.log(error);

      return res.status(500).send({ success: false, error: error });
    }
  } else {
    res.status(422).send({ success: false, error: "Missing data" });
  }
};
export default connectDB(handler);
