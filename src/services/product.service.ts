import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import ProductModel from "../models/product.model";
import { ProductModel as ProductInterface } from "../interfaces/productModel.interface";

const createProduct = async (
  input: DocumentDefinition<Omit<ProductInterface, "createdAt" | "updatedAt">>
) => {
  return ProductModel.create(input);
};

const findProduct = async (
  query: FilterQuery<ProductInterface>,
  options: QueryOptions = { lean: true }
) => {
  return ProductModel.find(query, {}, options);
};

const findAndUpdateProduct = async (
  query: FilterQuery<ProductInterface>,
  update: UpdateQuery<ProductInterface>,
  options: QueryOptions
) => {
  return ProductModel.findOneAndUpdate(query, update, options);
};

const deleteProduct = async (query: FilterQuery<ProductInterface>) => {
  return ProductModel.deleteOne(query);
};

export { createProduct, findProduct, findAndUpdateProduct, deleteProduct };
