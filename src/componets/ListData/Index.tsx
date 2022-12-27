import {
  faFileInvoiceDollar,
  faMoneyBillTransfer,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAdmin from "../../hooks/useAdmin";
import { AccountsInteface } from "../../Interfase/Accounts";
import { TransactionInterface } from "../../Interfase/Transaction";

import BasicModal from "../modal";

import "./index.scss";

export const ListData = () => {
  const { accounts, handlerAccount, account, transaction } = useAdmin();
  return (
    <>
      <h1>Cuentas</h1>
      <div className="container-cuentas">
        <nav className="cuentas-nav">
          <BasicModal />
          <div className="cuentas-buscardor">
            <label htmlFor="buscardor">Buscador:</label>
            <input id="buscardor" />
          </div>
          <div className="cuentas-nav_fechas">
            <label htmlFor="fecha1">Desde:</label>
            <input type={"date"} />

            <label htmlFor="fecha2">hasta:</label>
            <input type={"date"} />
          </div>
          <div>
            <select
              onChange={handlerAccount}
              value={account}
              className="select-cuenta"
            >
              <option value={"general"}>General</option>
              {accounts.map((acc: AccountsInteface) => (
                <option key={acc.id} value={acc.id}>
                  {acc.bank}
                </option>
              ))}
            </select>
          </div>
        </nav>
        <div className="cuentas-subtitulo">
          <FontAwesomeIcon
            icon={faFileInvoiceDollar}
            size={"5x"}
            color="#4d4d4de"
          />
          <h1>Lista de datos</h1>
        </div>

        <div className="cuentas-listado">
          {transaction ? (
            transaction.map((tr: TransactionInterface) => (
              <div key={tr.id} className="cuenta-transaccion">
                {tr.type_transation === "bill" ? (
                  <FontAwesomeIcon
                    icon={faMoneyBillTransfer}
                    size="5x"
                    color={"#ff0b00"}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    size={"5x"}
                    color={"#0abf53"}
                  />
                )}

                <h1>{tr.transaction_name}</h1>
                <p className="transaccion-description">
                  {tr.transaction_description}
                </p>
                <p>
                  <span>${tr.amount}</span>
                </p>
                <p>{tr.created_at.split("T")[0]}</p>
              </div>
            ))
          ) : (
            <h1 className="cuenta-transaccion">No hay gastos ...</h1>
          )}
        </div>
      </div>
    </>
  );
};
