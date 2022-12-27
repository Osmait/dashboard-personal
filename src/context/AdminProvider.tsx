import React, {
  createContext,
  ReactHTMLElement,
  useEffect,
  useState,
} from "react";
import { getAccounts } from "../api/account";
import { getBills } from "../api/bill";
import { getTransaction } from "../api/income";
import { AccountsInteface } from "../Interfase/Accounts";
import { TransactionInterface } from "../Interfase/Transaction";

type Props = {
  children: JSX.Element;
};

const AdminContext = createContext<any>(undefined);
export const AdminProvider = ({ children }: Props) => {
  const [accounts, setAccounts] = useState<AccountsInteface[]>([]);
  const [account, setAccount] = useState<string>("general");
  const [transaction, setTransaction] = useState<TransactionInterface[]>([]);

  //   Accounts
  useEffect(() => {
    const consultApiAccount = async () => {
      const token = localStorage.getItem("Authorization");

      if (!token) {
        return;
      }
      const accountsReponse = await getAccounts(token);

      setAccounts(accountsReponse);
    };
    consultApiAccount();
  }, []);

  //   Transaction
  useEffect(() => {
    const consultApiTransaction = async () => {
      const token = localStorage.getItem("Authorization");

      if (!token) {
        return;
      }
      const incomeReponse = await getTransaction(token, account);
      setTransaction(incomeReponse);
    };
    consultApiTransaction();
  }, [account]);

  //   Handlers
  const handlerAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setAccount(e.target.value);
  };

  return (
    <AdminContext.Provider
      value={{
        accounts,
        handlerAccount,
        account,
        transaction,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContext;
