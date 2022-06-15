import { UserModel } from "./userModel.interface";

export interface ProductModel {
  user: UserModel["_id"];
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
