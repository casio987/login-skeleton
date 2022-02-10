import axios from "axios";
import { ILoginResponse, IRegisterResponse } from "../interfaces/IResponses";

export const registerUser = async (username: string, password: string): Promise<IRegisterResponse> => {
  try {
    // TODO: manage env (storing api url)
    const { status, data } =  await axios.post<string>(`http://localhost:3000/api/users/register`, {
      username: username,
      password: password
    });
    sessionStorage.setItem("token", data);
    return { status: status, token: data };
  } catch (err: any) {
    throw err;
  }
}

export const loginUser = async (username: string, password: string): Promise<ILoginResponse> => {
  try {
    const { status, data } =  await axios.post<string>(`http://localhost:3000/api/users/login`, {
      username: username,
      password: password
    });
    sessionStorage.setItem("token", data);
    return { status, token: data };
  } catch (err: any) {
    throw err;
  }
}