import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserModel } from "../interfaces/userModel";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre(
  "save",
  async function (next: mongoose.CallbackWithoutResultAndOptionalError) {
    let user = this as UserModel;

    if (!user.isModified("password")) {
      return next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
  }
);

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this as UserModel;

  return await bcrypt.compare(password, user.password).catch((error) => false);
};

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
