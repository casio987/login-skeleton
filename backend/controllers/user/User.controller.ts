import { NextFunction, Request, Response, Router } from "express";
import { HTTPError } from "../../components/Errors";
import { IController } from "../../interfaces/IController";

export class UserController implements IController {
  private path: string = "/users";
  private router: Router = Router();

  constructor() {
    this.initialiseRoutes;
  }

  private initialiseRoutes = (): void => {
    this.router.post(
      `${this.path}/register`,
      // TODO: insert validation middle ware here :)
      this.register
    );
    // TODO: add login and get user routes?
  }

  public getPath = (): string => {
    return this.path;
  }

  public getRouter = (): Router => {
    return this.router;
  }

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      // add user to db
      console.log(req);
      res.status(201).json();
    } catch (err) {
      next(err);
    }
  }
}