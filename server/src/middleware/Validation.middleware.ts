import { ObjectSchema } from "@hapi/joi";
import { Request, Response, NextFunction } from "express";

export const validationMiddleware = (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    // TODO: may need additional options such as abortearly, allowunknown, stripunknown, etc...
    const result = schema.validate(req.body);
    const { error } = result;
    if (error) {
      res.status(400).json({
        errorCode: 400,
        errorMessage: "Invalid response body",
      });
      return;
    }
    next();
  };