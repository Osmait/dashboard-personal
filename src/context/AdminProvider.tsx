import React, {
  createContext,
  ReactHTMLElement,
  useEffect,
  useState,
} from "react";
import { getAccounts, PotsAccounts } from "../api/account";

import {
  deleteTransation,
  getTransaction,
  postTransaction,
  updateTransaction,
} from "../api/income";
import EditModal from "../componets/EditModal";
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
  const [cambio, setCambio] = useState<boolean>(false);
  const [id, setId] = useState<string>();

  const [transactionName, setTransactionName] = useState<string>("");
  const [transactionDescription, setTransactionDescription] =
    useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<string>("");
  const [accountModal, setAccountModal] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [editopen, setEditopen] = useState(false);
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth();
  const year = date.getFullYear();

  const [desde, setDesde] = useState<string>(`${year}-${mes + 1}-${dia}`);
  const [hasta, setHasta] = useState<string>(`${year}-${mes + 1}-${dia + 1}`);

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
  const postApiAccount = async (data: AccountsInteface) => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
      return;
    }
    const accountResponse = await PotsAccounts(token, data);
    setAccounts([accountResponse, ...accounts]);
  };

  //   Transaction
  useEffect(() => {
    const consultApiTransaction = async () => {
      const token = localStorage.getItem("Authorization");

      if (!token) {
        return;
      }
      const incomeReponse = await getTransaction(token, account, desde, hasta);
      setTransaction(incomeReponse);
    };
    consultApiTransaction();
  }, [, account, desde, hasta, cambio, cambio]);

  const postApiTransaction = async (data: TransactionInterface) => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
      return;
    }
    const incomeReponse = await postTransaction(token, data);
    setTransaction([incomeReponse, ...transaction]);
    setCambio(true);
  };

  const deleteApiTrasaction = async (id: string) => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
      return;
    }
    deleteTransation(token, id);
    const trasationUpdate = transaction.filter(
      (ts: TransactionInterface) => ts.id !== id
    );
    setTransaction(trasationUpdate);
    setCambio(!cambio);
  };

  //   Handlers
  const handlerAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
  };

  const updateApiTransaction = async (
    data: TransactionInterface,
    id: string
  ) => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
      return;
    }
    const dataUpdate = await updateTransaction(token, data, id);
    const transactionUpdate = transaction.filter((tr) =>
      tr.id === data.id ? (tr = dataUpdate) : tr
    );
    setTransaction(transactionUpdate);
  };

  const handlerEdit = async (data: TransactionInterface) => {
    setTransactionName(data.transaction_name);
    setTransactionDescription(data.transaction_description);
    setAmount(data.amount);
    setTransactionType(data.type_transation);
    setAccountModal(data.accountId);
    setId(data.id);
    setEditopen(true);
  };

  return (
    <AdminContext.Provider
      value={{
        accounts,
        handlerAccount,
        account,
        transaction,
        postApiTransaction,
        postApiAccount,
        hasta,
        desde,
        setHasta,
        setDesde,
        deleteApiTrasaction,
        cambio,
        setCambio,
        transactionName,
        transactionDescription,
        amount,
        transactionType,
        accountModal,
        setTransactionName,
        setTransactionDescription,
        setAmount,
        setTransactionType,
        setAccountModal,
        open,
        setOpen,
        handlerEdit,
        editopen,
        setEditopen,
        updateApiTransaction,
        id,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContext;
