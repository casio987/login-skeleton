import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";
import bcrypt from "bcrypt";

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

UserSchema.pre('save', async function(next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

export default model<IUser>("IUser", UserSchema);