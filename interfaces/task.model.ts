import { Schema, model } from "mongoose";
import { User } from "./user.model";
import mongoose from "mongoose";
import { BoardSection, BoardSectionSchema } from "./boardsection.model";

export type TaskType = "Development" | "Design" | "Audio" | "Other";
export interface Task {
  _id: string;
  title: string;
  description: string;
  picture?: string;
  attachments: string[];
  comments: string[];
  likes: number;
  users: User[];
  taskTypes: TaskType[];
  created_at: Date;
  updated_at: Date;
}

export const TaskSchema = new Schema<Task>(
  {
    title: { type: String, required: true },
    description: { type: String },
    picture: { type: String },
    attachments: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
    users: [{ ref: "User", type: mongoose.Schema.Types.ObjectId }],
    taskTypes: { type: [String], default: [] },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
export const TaskModel =
  mongoose.models.Task || model<Task>("Task", TaskSchema);
