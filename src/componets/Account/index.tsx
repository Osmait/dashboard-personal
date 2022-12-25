import { faBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BasicModal from "../modal";
import "./index.scss";

export const Account = () => {
  return (
    <div className="container-bank">
      <div>
        <BasicModal />
      </div>
      <div className="titulo">
        <h1>Cuentas de Banco</h1>
      </div>
      <div className="lista-cuentas">
        <div className="cuenta-banco">
          <FontAwesomeIcon icon={faBank} size={"7x"} />
          <div>
            <h1>Banco popular</h1>
            <h2>balance:$3000</h2>
          </div>
        </div>
        <div className="cuenta-banco">
          <FontAwesomeIcon icon={faBank} size={"7x"} />
          <div>
            <h1>Banco popular</h1>
            <h2>balance:$3000</h2>
          </div>
        </div>
        <div className="cuenta-banco">
          <FontAwesomeIcon icon={faBank} size={"7x"} />
          <div>
            <h1>Banco popular</h1>
            <h2>balance:$3000</h2>
          </div>
        </div>
        <div className="cuenta-banco">
          <FontAwesomeIcon icon={faBank} size={"7x"} />
          <div>
            <h1>Banco popular</h1>
            <h2>balance:$3000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
