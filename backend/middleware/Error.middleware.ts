import { NextFunction, Request, Response } from "express";
import { HTTPError } from "../components/Errors";

export const ErrorMiddleware = (
  err: HTTPError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HTTPError) {
    const status = err.status || 500;
    const message = err.message || "insert-error-message-here XD";   
    return res.status(status).json({
      status,
      message
    });
  }
}