import { Document } from "mongoose";

export interface IRegister extends Document {
  username: String;
  password: String;
}