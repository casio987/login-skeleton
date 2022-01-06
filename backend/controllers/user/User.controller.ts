import { NextFunction, Request, Response, Router } from "express";
import { HTTPError } from "../../components/Errors";
import { IController } from "../../interfaces/IController";
import { UserService } from "./User.service";

export class UserController implements IController {
  private path: string = "/users";
  private router: Router = Router();
  private userService = new UserService();

  constructor() {
    this.initialiseRoutes();
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
    const { username, password } = req.body;
    try {
      const newUser = await this.userService.register(username, password);
      res.status(201).json({ newUser });
    } catch (err) {
      // console.log(err);
      return next(err);  
    }
  }
}