import axios from "axios";
import { BalanceIntefase } from "../Interfase/Balance";
import { TransactionInterface } from "../Interfase/Transaction";

export const getTransaction = async (
  token: string,
  account: string,
  desde: string,
  hasta: string
): Promise<TransactionInterface[]> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${
    import.meta.env.VITE_URL_API
  }transation/${account}?date1=${desde}&date2=${hasta}`;
  const { data } = await axios(URL, config);

  return data;
};

export const postTransaction = async (
  token: string,
  transation: TransactionInterface
): Promise<TransactionInterface> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  if (transation.type_transation === "bill") {
    transation.amount = transation.amount * -1;
  }

  const URL = `${import.meta.env.VITE_URL_API}transation`;
  const { data } = await axios.post(URL, transation, config);

  return data;
};

export const updateTransaction = async (
  token: string,
  transation: {},
  id: string
): Promise<TransactionInterface> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}transation/${id}`;
  const { data } = await axios.put(URL, transation, config);

  return data;
};

export const deleteTransation = async (
  token: string,
  id: string
): Promise<TransactionInterface> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}transation/${id}`;
  const { data } = await axios.delete(URL, config);

  return data;
};

export const getBalance = async (token: string): Promise<BalanceIntefase[]> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}balance`;
  const { data } = await axios(URL, config);

  return data;
};
