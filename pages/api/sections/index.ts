import { IResponse } from "interfaces/api.model";
import connectDB from "middleware/dbconnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { BoardSection, SectionModel } from "interfaces/boardsection.model";
import { Board, BoardModel } from "interfaces/board.model";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  if (req.method === "POST") {
    await addSection(req, res);
  } else {
    res.status(400).send({ success: false, error: "Wrong request" });
  }
};

const addSection = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) => {
  const { title, id } = req.body;
  if (title && id) {
    try {
      let section = new SectionModel({
        title,
      });
      let sectionCreated: BoardSection = await section.save();
      const board: Board = await BoardModel.findOne({ _id: id });
      board.sections.push(sectionCreated);
      await BoardModel.findOneAndUpdate({ _id: id }, board);

      return res.status(200).send({ success: true, body: sectionCreated });
    } catch (error) {
      console.log(error);

      return res.status(500).send({ success: false, error: error });
    }
  } else {
    res.status(422).send({ success: false, error: "Missing data" });
  }
};
export default connectDB(handler);
