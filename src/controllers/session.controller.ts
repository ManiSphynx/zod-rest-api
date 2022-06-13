import { Request, Response } from "express";
import { createSession } from "../services/session.service";
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

export { createSessionHandler };
