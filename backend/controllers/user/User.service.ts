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
      const user = this.user.create({ username, password });
      return user;
    } catch (err) {
      throw new HTTPError(500, "Unable to register user");
    }
  }
}