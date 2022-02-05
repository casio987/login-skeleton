import UserSchema from "../../models/User.model";
import { IUser } from "../../interfaces/IUser";
import { HTTPError } from "../../components/Errors";

export class UserService {
  private user = UserSchema;

  /**
   * Register a new user.
   */
  public async register(username: string, password: string): Promise<IUser> {
    try {
      const user = await this.user.findOne({ username: username });
      if (user) {
        // TODO: check if this is the right http code to use
        throw new HTTPError(400, "A user with that username already exists");
      } else {
        try {
          const newUser = await this.user.create({ username, password });
          return newUser;
        } catch (err: any) {
          throw err;
        }
      }
    } catch (err: any) {
      throw err;
    }
  }

  /**
   * Logins a user.
   */
  public async login(username: string, password: string): Promise<IUser> {
    try {
      const user = await this.user.findOne({ username: username });
      if (!user) {
        throw new HTTPError(404, "Unable to find user with that username");
      }
      // TODO: validate password using bcrypt instead
      if (user.password === password) {
        // TODO: create token and return instead
        return user;
      } else {
        throw new HTTPError(401, "Incorrect password provided");
      }
    } catch (err: any) {
      throw err;
    } 
  }
}