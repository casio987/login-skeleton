import { Schema, model } from "mongoose";
import { IRegister } from "../interfaces/IRegister";

const RegisterSchema = new Schema(
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

export default model<IRegister>("IRegister", RegisterSchema);