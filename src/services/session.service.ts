import { get } from "lodash";
import { FilterQuery, UpdateQuery } from "mongoose";
import SessionModel from "../models/session.model";
import { SessionModel as SessionInterface } from "../interfaces/sessionModel.interface";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import { findUser } from "./user.service";
import config from "config";

const createSession = async (userId: string, userAgent: string) => {
  const session = await SessionModel.create({ user: userId, userAgent });

  return session.toJSON();
};

const findSessions = async (query: FilterQuery<SessionInterface>) => {
  return SessionModel.find(query).lean();
};

const updateSession = async (
  query: FilterQuery<SessionInterface>,
  update: UpdateQuery<SessionInterface>
) => {
  return SessionModel.updateOne(query, update);
};

const reIssueAccessToken = async ({
  refreshToken,
}: {
  refreshToken: string;
}) => {
  const { decoded } = verifyJwt(refreshToken);

  if (!decoded || !get(decoded, "session")) return false;

  const session = await SessionModel.findById(get(decoded, "session"));

  if (!session || !session.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get("refreshTokenExpiration") }
  );

  return accessToken;
};

export { createSession, findSessions, updateSession, reIssueAccessToken };
