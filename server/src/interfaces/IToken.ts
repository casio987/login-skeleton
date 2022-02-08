import { Schema } from "mongoose";
// TODO: extends object?
export interface IToken {
  id: Schema.Types.ObjectId;
  expiresIn: number;
}