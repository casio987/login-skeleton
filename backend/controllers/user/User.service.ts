import UserSchema from "../../models/User.model";
import { IUser } from "../../interfaces/IUser";

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
      throw new Error("Unable to register user");
    }
  }
}