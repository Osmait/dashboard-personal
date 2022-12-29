import React, { useState } from "react";
import { InfoResumen } from "../InfoResumen";
import { Charts } from "./Charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import Loader from "react-loaders";
import { AccountsInteface } from "../../Interfase/Accounts";
import useAdmin from "../../hooks/useAdmin";

export const Home = () => {
  const { transaction, handlerAccount, account, accounts } = useAdmin();
  return (
    <>
      <h1>Inicio</h1>
      <div className="container">
        <div className="home-chart">
          <Charts />
        </div>
        <div className="home-resumen">
          <h1>
            <FontAwesomeIcon icon={faBank} />
            &nbsp; Resumen
          </h1>
          <div className="home-info">
            <div className="home-info_values">
              <h1 className="home-title-transaction">
                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                &nbsp; Transacciones
              </h1>
              <div className="select-container">
                <label>Cuentas</label>
                <select
                  onChange={handlerAccount}
                  value={account}
                  className="select-home"
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

              <InfoResumen />
            </div>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};
