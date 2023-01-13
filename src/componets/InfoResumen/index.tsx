import {
  faMoneyBillTransfer,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useAdmin from "../../hooks/useAdmin";
import { TransactionInterface } from "../../Interfase/Transaction";
import "./index.scss";

export const InfoResumen = () => {
  const { transaction } = useAdmin();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Transaccion</th>
            <th>Descripcion</th>
            <th>Monto</th>
            <th>Fecha</th>
          </tr>
        </thead>
        {transaction ? (
          transaction.map((tras: TransactionInterface) => (
            <tbody key={tras.id}>
              <tr>
                <td>
                  {tras.type_transation == "bill" ? (
                    <FontAwesomeIcon
                      icon={faMoneyBillTransfer}
                      color={"#ff0b00"}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faSackDollar} color={"#0abf53"} />
                  )}
                  &nbsp; {tras.transaction_name}
                </td>
                <td>{tras.transaction_description}</td>
                <td className={tras.type_transation == "bill" ? "bill" : ""}>
                  $ {tras.amount}
                </td>
                <td>{tras.created_at.split("T")[0]}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <td>No hay datos</td>
        )}
      </table>
    </div>
  );
};
