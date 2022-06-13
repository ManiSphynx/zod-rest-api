import { DocumentDefinition } from "mongoose";
import UserModel from "../models/user.model";
import { UserModel as UserInterface } from "../interfaces/userModel.interface";
import { omit } from "lodash";

const createUser = async (
  input: DocumentDefinition<
    Omit<UserInterface, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  try {
    const user = await UserModel.create(input);
    return omit(user.toJSON(), "password", "__v");
  } catch (error: any) {
    throw new Error(error);
  }
};

const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await UserModel.findOne({ email });
  if (!user) return false;

  const isValid = await user.comparePassword(password);
  if (!isValid) return false;

  return omit(user.toJSON(), "password", "__v");
};

export { createUser, validatePassword };
