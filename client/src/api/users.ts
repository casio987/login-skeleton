import axios from "axios";
import { IGetUserResponse, IGetUserResponseBody, ILoginResponse, IRegisterResponse } from "../interfaces/IResponses";

export const registerUser = async (username: string, password: string): Promise<IRegisterResponse> => {
  try {
    const { status, data } =  await axios.post<string>(`${process.env.REACT_APP_API}/users/register`, {
      username: username,
      password: password
    });
    sessionStorage.setItem(process.env.REACT_APP_TOKEN!, data);
    return { status: status, token: data };
  } catch (err: any) {
    throw err;
  }
};

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
};

export const getUser = async (): Promise<IGetUserResponse> => {
  try {
    const { status, data } = await axios.get<IGetUserResponseBody>(`${process.env.REACT_APP_API}/users`, { 
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem(process.env.REACT_APP_TOKEN!)}`
      }
    });

    return { status, userDetails: data };
  } catch (err: any) {
    throw err;
  }
}