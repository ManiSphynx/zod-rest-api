import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { ProductModel } from "../interfaces/productModel.interface";
const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890", 10);

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => `product_${nanoid()}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductModel>("Product", productSchema);

export default ProductModel;
