import { Response, NextFunction, Request } from "express";
import jwt from "jsonwebtoken";
import { HTTPError } from "../components/Errors";
import { IToken } from "../interfaces/IToken";
import UserModel from "../models/User.model";
import { verifyToken } from "../utils/token";

export async function authenticationMiddleware (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return next(new HTTPError(401, "Unauthorised user"));
  }

  const token = bearer.split(" ")[1].trim();
  
  try {
    const payload: IToken | jwt.JsonWebTokenError = await verifyToken(token);
    if (payload instanceof jwt.JsonWebTokenError) {
      return next(new HTTPError(401, "Unauthorised user"));
    }

    const user = await UserModel.findById(payload.id)
      .select("-password")
      .exec();

    if (!user) {
      return next(new HTTPError(401, "User unauthorised"));
    };

    req.body = user;
    return next();
  } catch (err) {
      return next(new HTTPError(401, "User unauthorised"));
  }
}