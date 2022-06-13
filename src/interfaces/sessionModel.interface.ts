import mongoose from "mongoose";
import { UserModel } from "./userModel.interface";

export interface SessionModel extends mongoose.Document {
  user: UserModel["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}
