import { DocumentDefinition } from "mongoose";
import UserModel from "../models/user.model";
import { UserModel as UserInterface } from "../interfaces/userModel";

const createUser = async (
  input: DocumentDefinition<
    Omit<UserInterface, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};

export { createUser };
