import express from "express";
import config from "config";
import connect from "./utils/connect.utils";
import logger from "./utils/logger.utils";
import routes from "./routes";

const app = express();
const port = config.get<number>("port") || 1337;
app.use(express.json());

app.listen(port, async () => {
  logger.info(`Server listening on port ${port}`);
  await connect();
  routes(app);
});
