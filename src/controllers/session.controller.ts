import { Request, Response } from "express";
import {
  createSession,
  findSessions,
  updateSession,
} from "../services/session.service";
import { validatePassword } from "../services/user.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

const createSessionHandler = async (req: Request, res: Response) => {
  const user = await validatePassword(req.body);
  if (!user) return res.status(401).send("Invalid credentials");

  const session = await createSession(user._id, req.get("user-agent") || "");

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenExpiration") }
  );

  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenExpiration") }
  );

  return res.json({ accessToken, refreshToken });
};

const getUserSessionsHandler = async (req: Request, res: Response) => {
  const userId = res.locals.user._id;
  const sessions = await findSessions({ user: userId, valid: true });
  return res.json(sessions);
};

const deleteSessionHandler = async (req: Request, res: Response) => {
  const sessionId = res.locals.user.session;

  await updateSession({ _id: sessionId }, { valid: false });

  return res.send({
    accessToken: null,
    refreshToken: null,
  });
};

export { createSessionHandler, getUserSessionsHandler, deleteSessionHandler };
