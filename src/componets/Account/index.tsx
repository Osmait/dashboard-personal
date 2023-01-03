import { faBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useAdmin from "../../hooks/useAdmin";
import { AccountsInteface } from "../../Interfase/Accounts";
import BasicModal from "../modal";
import "./index.scss";
import AccountModal from "./modalAccount";

export const Account = () => {
  const { accounts } = useAdmin();

  return (
    <div className="container-bank">
      <div>
        <AccountModal />
      </div>
      <div className="titulo">
        <h1>Cuentas de Banco</h1>
      </div>
      <div className="lista-cuentas">
        {accounts ? (
          accounts.map((account: AccountsInteface) => (
            <div key={account.id} className="cuenta-banco">
              <FontAwesomeIcon icon={faBank} size={"7x"} />
              <div>
                <h1>{account.bank}</h1>
                <h2>balance Inicial: ${account.balance}</h2>
              </div>
            </div>
          ))
        ) : (
          <option>No hay datos</option>
        )}
      </div>
    </div>
  );
};
