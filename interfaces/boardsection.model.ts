import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import { Task } from "./task.model";

export interface BoardSection {
  _id: string;
  title: string;
  tasks: Task[];
  created_at: Date;
  updated_at: Date;
}

export const BoardSectionSchema = new Schema<BoardSection>(
  {
    title: { type: String, required: true },
    tasks: [{ ref: "Tas", type: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
export const SectionModel =
  mongoose.models.Section || model<BoardSection>("Section", BoardSectionSchema);
