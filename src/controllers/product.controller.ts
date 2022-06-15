import { Request, Response } from "express";
import {
  createProductInput,
  deleteProductInput,
  getProductInput,
  updateProductInput,
} from "../schema/product.schema";
import {
  createProduct,
  findAndUpdateProduct,
  findProduct,
} from "../services/product.service";

const createProductHandler = async (
  req: Request<{}, {}, createProductInput["body"]>,
  res: Response
) => {
  const userId = res.locals.user._id;
  const body = req.body;
  const product = await createProduct({ ...body, user: userId });

  return res.send(product);
};

const updateProductHandler = async (
  req: Request<updateProductInput["params"]>,
  res: Response
) => {
  const userId = res.locals.user._id;
  const productId = req.params.productId;
  const update = req.body;

  const product = await findProduct({ productId });

  if (!product) {
    return res.sendStatus(404);
  }

  /* TODO: check this model */
  if (product.user !== userId) {
    return res.sendStatus(403);
  }

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  });

  return res.send(updatedProduct);
};

const getProductHandler = async (
  req: Request<getProductInput["params"]>,
  res: Response
) => {};

const deleteProductHandler = async (
  req: Request<deleteProductInput["params"]>,
  res: Response
) => {};

export {
  createProductHandler,
  updateProductHandler,
  getProductHandler,
  deleteProductHandler,
};
