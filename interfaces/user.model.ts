import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export const UserSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
export const UserModel =
  mongoose.models.User || model<User>("User", UserSchema);
