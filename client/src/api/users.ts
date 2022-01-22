import axios from "axios";
import { IRegisterResponse, IRegisterResponseBody } from "../interfaces/IResponses";

export const registerUser = async (username: string, password: string): Promise<IRegisterResponse> => {
  try {
    // TODO: manage env (storing api url)
    const { status, data } =  await axios.post<IRegisterResponseBody>(`http://localhost:3000/api/users/register`, {
      username: username,
      password: password
    });
    return { status, data };
  } catch (err) {
    // TODO: do i need to push to error page here?
    throw err;
  }
}