import { NextFunction, Request, Response, Router } from "express";
import { HTTPError } from "../../components/Errors";
import { IController } from "../../interfaces/IController";
import { validationMiddleware } from "../../middleware/Validation.middleware";
import { SignUpSchema, LoginSchema } from "./User.schema";
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
      validationMiddleware(SignUpSchema),
      this.register
    );
    this.router.post(
      `${this.path}/login`,
      validationMiddleware(LoginSchema),
      this.login
    )
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
      res.status(201).json({
        username: newUser.username,
        password: newUser.password
      });
    } catch (err: any) {
      return next(err);
    }
  }

  private login = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { username, password } = req.body;
    try {
      // TODO: return token instead
      const user = await this.userService.login(username, password);
      res.status(201).json({
        username: user.username,
        password: user.password
      })
    } catch (err: any) {
      return next(err);
    }
  }
}