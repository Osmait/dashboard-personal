import axios from "axios";
import { LoginUser, TokenReponse, User, UserResponse } from "../Interfase/User";

export const CreateUser = async (user: User): Promise<UserResponse> => {
  const URL = `${import.meta.env.VITE_URL_API}user`;

  const { data } = await axios.post(URL, user);
  return data;
};

export const login = async (user: LoginUser): Promise<TokenReponse> => {
  const URL = `${import.meta.env.VITE_URL_API}login`;
  const { data } = await axios.post(URL, user);
  return data;
};
