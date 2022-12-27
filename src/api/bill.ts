import axios from "axios";
import { BillInterface } from "../Interfase/Transaction";

export const getBills = async (
  token: string,
  account: string
): Promise<BillInterface[]> => {
  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  const URL = `${import.meta.env.VITE_URL_API}bill/${account}`;
  const { data } = await axios(URL, config);

  return data;
};
