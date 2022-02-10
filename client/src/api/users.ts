import axios from "axios";
import { ILoginResponse, IRegisterResponse } from "../interfaces/IResponses";

export const registerUser = async (username: string, password: string): Promise<IRegisterResponse> => {
  try {
    // TODO: manage env (storing api url)
    const { status, data } =  await axios.post<string>(`${process.env.REACT_APP_API}/users/register`, {
      username: username,
      password: password
    });
    sessionStorage.setItem(process.env.REACT_APP_TOKEN!, data);
    return { status: status, token: data };
  } catch (err: any) {
    throw err;
  }
}

export const loginUser = async (username: string, password: string): Promise<ILoginResponse> => {
  try {
    const { status, data } =  await axios.post<string>(`${process.env.REACT_APP_API}/users/login`, {
      username: username,
      password: password
    });
    sessionStorage.setItem(process.env.REACT_APP_TOKEN!, data);
    return { status, token: data };
  } catch (err: any) {
    throw err;
  }
}