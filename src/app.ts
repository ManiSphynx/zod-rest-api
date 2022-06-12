import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const app = express();
const port = config.get<number>("port") || 1337;

app.listen(port, async () => {
  logger.info(`Server listening on port ${port}`);
  await connect();
  routes(app);
});
