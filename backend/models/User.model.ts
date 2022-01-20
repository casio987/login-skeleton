import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }
)

export default model<IUser>("IUser", UserSchema);