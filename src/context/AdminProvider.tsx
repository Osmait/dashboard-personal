import moment from "moment";
import React, {
  createContext,
 
  useEffect,
  useState,
} from "react";
import { deleteAccount, getAccounts, PotsAccounts } from "../api/account";

import {
  deleteTransation,
  getBalance,
  getTransaction,
  postTransaction,
  updateTransaction,
} from "../api/income";

import { AccountsInteface } from "../Interfase/Accounts";
import { BalanceIntefase } from "../Interfase/Balance";
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
  const [amount, setAmount] = useState<string>("");
  const [transactionType, setTransactionType] = useState<string>("");
  const [accountModal, setAccountModal] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [editopen, setEditopen] = useState(false);
  const [balance, setBalance] = useState<BalanceIntefase[]>([]);
  
  const dateMoment =moment().format("YYYY-MM-DD")
  const dateHasta =moment().add(1,"day").format("YYYY-MM-DD")

  

  const [desde, setDesde] = useState<string>(dateMoment);
  const [hasta, setHasta] = useState<string>(dateHasta);

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
  }, [cambio]);
  const postApiAccount = async (data: AccountsInteface) => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
      return;
    }
    const accountResponse = await PotsAccounts(token, data);
    if(!accounts){
      setAccounts([accountResponse])
      return
    }
    setAccounts([accountResponse, ...accounts]);
    setCambio(!cambio);
  };

  const deleteAccountApi = async(id:string)=>{

    const token = localStorage.getItem("Authorization");

      if (!token) {
        return;
      }
    await deleteAccount(token, id)
    const actualAccount = accounts.filter((acc:AccountsInteface)=> acc.id != id)
    setAccounts(actualAccount)
  }
 
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
  }, [account, desde, hasta, cambio, cambio]);

  const postApiTransaction = async (data: TransactionInterface) => {
    const token = localStorage.getItem("Authorization");

    if (!token) {
      return;
    }
    const dataResponse =await postTransaction(token, data);
    if(!transaction){
      setTransaction([dataResponse])
      return
    }
    setTransaction([dataResponse,...transaction])
    setCambio(!cambio);
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

  useEffect(() => {
    const consultaApi = async () => {
      const token = localStorage.getItem("Authorization");

      if (!token) {
        return;
      }
      const data = await getBalance(token);
      
      setBalance(data);
    };
    consultaApi();
  }, [ ,account, cambio]);

  const handlerEdit = async (data: TransactionInterface) => {
    setTransactionName(data.transaction_name);
    setTransactionDescription(data.transaction_description);
    setAmount(data.amount.toString());
    setTransactionType(data.type_transation);
    setAccountModal(data.account_id);

    setId(data.id);
    setEditopen(true);
    console.log(data);
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
        balance,
        setBalance,
        deleteAccountApi
      }}

    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContext;
