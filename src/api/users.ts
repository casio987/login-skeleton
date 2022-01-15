import axios from "axios";
import dotenv from "dotenv";
import { IRegisterResponse, IRegisterResponseBody } from "../interfaces/IResponses";

export const registerUser = async (username: string, password: string): Promise<IRegisterResponse> => {
  dotenv.config();
  try {
    const { status, data } =  await axios.post<IRegisterResponseBody>(`${process.env.REACT_APP_API}/users/register`, {
      username: username,
      password: password
    });
    return { status, data };
  } catch (err) {
    // TODO: do i need to push to error page here?
    throw err;
  }
}