import axios from "axios";
import dotenv from "dotenv";

// TODO: need to figure out return type
export const registerUser = async (username: string, password: string) => {
  dotenv.config();
  try {
    const { data } =  await axios.post(`${process.env.REACT_APP_API}/users/register`, {
      username: username,
      password: password
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}