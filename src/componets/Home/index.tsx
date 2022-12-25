import React, { useState } from "react";
import { InfoResumen } from "../InfoResumen";
import { Charts } from "./Charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBank,
  faMoneyBillTransfer,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import Loader from "react-loaders";

export const Home = () => {
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
              <h1>
                <FontAwesomeIcon icon={faSackDollar} color={"#0abf53"} />
                &nbsp; Ingresos
              </h1>
              <InfoResumen />
            </div>
            <div className="home-info_values">
              <h1>
                <FontAwesomeIcon icon={faMoneyBillTransfer} color={"#ff0b00"} />
                &nbsp; Gastos
              </h1>
              <InfoResumen />
            </div>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};
