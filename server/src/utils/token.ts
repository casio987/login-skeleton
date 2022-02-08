import jwt from "jsonwebtoken";
import { IToken } from "../interfaces/IToken";
import { IUser } from "../interfaces/IUser";

export const generateToken = (user: IUser): string => {
  const token = jwt.sign("some-user-id", process.env.JWT_SECRET as jwt.Secret, {
    expiresIn: "1m" // TODO: current placeholder
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

