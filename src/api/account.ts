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
