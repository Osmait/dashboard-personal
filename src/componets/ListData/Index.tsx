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

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import "./index.scss";
import { useState } from "react";
import EditModal from "../EditModal";
import { BalanceIntefase } from "../../Interfase/Balance";

export const ListData = () => {
  const {
    accounts,
    handlerAccount,
    account,
    transaction,
    desde,
    hasta,
    setDesde,
    setHasta,
    deleteApiTrasaction,
    handlerEdit,
    balance,
  } = useAdmin();

  const leadingActions = (transaction: TransactionInterface) => (
    <LeadingActions>
      <SwipeAction onClick={() => handlerEdit(transaction)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = (id: string) => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteApiTrasaction(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  console.log(account);

  return (
    <>
      <h1>Cuentas</h1>

      <div className="container-cuentas">
        <nav className="cuentas-nav">
          <BasicModal />
          <EditModal />
          <div className="cuentas-buscardor">
            <label htmlFor="buscardor">Buscador:</label>
            <input id="buscardor" />
          </div>
          <div className="cuentas-nav_fechas">
            <label htmlFor="fecha1">Desde:</label>
            <input
              type={"date"}
              value={desde}
              onChange={(e) => setDesde(e.target.value)}
            />

            <label htmlFor="fecha2">hasta:</label>
            <input
              type={"date"}
              value={hasta}
              onChange={(e) => setHasta(e.target.value)}
            />
          </div>
          <div>
            <select
              onChange={handlerAccount}
              value={account}
              className="select-cuenta"
            >
              <option value={"general"}>General</option>
              {accounts ? (
                accounts.map((acc: AccountsInteface) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.bank}
                  </option>
                ))
              ) : (
                <option>No hay cuentas</option>
              )}
            </select>
          </div>
        </nav>
        <div className="cuentas-subtitulo">
          <FontAwesomeIcon
            icon={faFileInvoiceDollar}
            size={"5x"}
            color="#4d4d4de"
          />
          <div>
            <h1>Lista de datos</h1>

            <h1>
              Balance:
              {balance
                ? balance.map(
                    (bl: BalanceIntefase) =>
                      bl.id === account && <span key={bl.id}> ${bl.total}</span>
                  )
                : 0}
            </h1>
          </div>
        </div>

        <div className="cuentas-listado">
          {transaction ? (
            transaction.map((tr: TransactionInterface) => (
              <SwipeableList key={tr.id}>
                <SwipeableListItem
                  leadingActions={leadingActions(tr)}
                  trailingActions={trailingActions(tr.id)}
                >
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
                      <span
                        className={tr.type_transation == "bill" ? "bill" : ""}
                      >
                        ${tr.amount}
                      </span>
                    </p>
                    <div className="text-container">
                      <p>{tr.created_at.split("T")[0]}</p>
                    </div>
                  </div>
                </SwipeableListItem>
              </SwipeableList>
            ))
          ) : (
            <h1 className="cuenta-transaccion">No hay Movimientos ...</h1>
          )}
        </div>
      </div>
    </>
  );
};
