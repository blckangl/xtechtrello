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
    await addTask(req, res);
  } else {
    res.status(400).send({ success: false, error: "Wrong request" });
  }
};

const addTask = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  const { title, id, description, picture, types } = req.body;
  if (title && id) {
    try {
      let task = new TaskModel({
        title,
        description: description ? description : "",
        picture: picture ? picture : "",
        taskTypes: types ? types : [],
      });
      let TaskCreated: Task = await task.save();
      const section: BoardSection = await SectionModel.findOne({ _id: id });
      section.tasks.push(TaskCreated);
      await SectionModel.findOneAndUpdate({ _id: id }, section);

      return res.status(200).send({ success: true, body: TaskCreated });
    } catch (error) {
      console.log(error);

      return res.status(500).send({ success: false, error: error });
    }
  } else {
    res.status(422).send({ success: false, error: "Missing data" });
  }
};
export default connectDB(handler);
