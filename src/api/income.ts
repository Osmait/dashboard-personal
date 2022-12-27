import axios from "axios";
import { TransactionInterface } from "../Interfase/Transaction";

export const getTransaction = async (
  token: string,
  account: string
): Promise<TransactionInterface[]> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}transation/${account}`;
  const { data } = await axios(URL, config);

  return data;
};
