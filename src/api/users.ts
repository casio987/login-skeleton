import axios from "axios";
import dotenv from "dotenv";
import { IRegisterResponse } from "../interfaces/IResponses";

export const registerUser = async (username: string, password: string): Promise<IRegisterResponse> => {
  dotenv.config();
  try {
    const { data, status } =  await axios.post(`${process.env.REACT_APP_API}/users/register`, {
      username: username,
      password: password
    });
    return { status, data };
  } catch (err) {
    throw err;
  }
}