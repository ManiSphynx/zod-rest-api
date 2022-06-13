import { Express, Request, Response } from "express";
import { createSessionHandler } from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import validate from "./middlewares/validateResource";
import { createSessionSchema } from "./schema/session.shema";
import { createUserSchema } from "./schema/user.schema";

const routes = (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validate(createUserSchema), createUserHandler);
  app.post(
    "/api/sessions",
    validate(createSessionSchema),
    createSessionHandler
  );
};

export default routes;
