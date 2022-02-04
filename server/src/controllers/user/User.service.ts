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
      const user = await this.user.create({ username, password });
      return user;
    } catch (err) {
      throw new HTTPError(500, "Unable to register user");
    }
  }

  /**
   * Logins a user.
   */
  public async login(username: string, password: string): Promise<IUser> {
      const user = await this.user.findOne({ username: username });
      
      if (!user) {
        throw new Error("Unable to find user with that username");
      }

      // TODO: validate password using bcrypt instead
      if (user.password === password) {
        // TODO: create token and return instead
        return user;
      } else {
        throw new Error("Incorrecnt password provided");
      }
  }
}