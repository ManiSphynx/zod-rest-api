import mongoose from "mongoose";
import config from "config";
import logger from "./logger.utils";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

export default connect;
