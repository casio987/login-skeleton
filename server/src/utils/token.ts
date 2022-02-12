import jwt from "jsonwebtoken";
import { IToken } from "../interfaces/IToken";
import { IUser } from "../interfaces/IUser";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = (user: IUser): string => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: "1m" // current placeholder - can change this to whatever you want
  });
  return token;
};

export const verifyToken = async (token: string): Promise<jwt.VerifyErrors | IToken> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET as jwt.Secret, (err, payload) => {
      if (err) {
        return reject(err);
      }
      resolve(payload as IToken);
    })
  })
};

