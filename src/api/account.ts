import axios from "axios";
import { AccountsInteface } from "../Interfase/Accounts";

export const getAccounts = async (
  token: string
): Promise<AccountsInteface[]> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}account`;
  const { data } = await axios(URL, config);

  return data;
};

export const PotsAccounts = async (
  token: string,
  account: AccountsInteface
): Promise<AccountsInteface> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}account`;
  const { data } = await axios.post(URL, account, config);

  return data;
};

export const deleteAccount = async (
  token: string,
  id:string
): Promise<AccountsInteface[]> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}account/${id}`;
  const { data } = await axios.delete(URL, config);

  return data;
};
