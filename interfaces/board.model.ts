import { Schema, model } from "mongoose";
import { User } from "./user.model";
import mongoose from "mongoose";
import { BoardSection } from "./boardsection.model";

export interface Board {
  _id: string;
  title: string;
  description: string;
  users: User[];
  sections: BoardSection[];
  isPrivate: boolean;
  created_at: Date;
  updated_at: Date;
}

export const BoardSchema = new Schema<Board>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isPrivate: { type: Boolean, default: false },
    users: [{ ref: "user", type: mongoose.Schema.Types.ObjectId, default: [] }],
    sections: [
      { ref: "section", type: mongoose.Schema.Types.ObjectId, default: [] },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
export const BoardModel =
  mongoose.models.Board || model<Board>("Board", BoardSchema);
