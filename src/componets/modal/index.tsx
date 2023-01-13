import Modal from "@mui/material/Modal";
import "./index.scss";
import useAdmin from "../../hooks/useAdmin";
import { AccountsInteface } from "../../Interfase/Accounts";
import { useEffect, useState } from "react";

export default function BasicModal() {
  const {
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
  } = useAdmin();
  const handleOpen = () => {
    setOpen(true);
    setTransactionName("");
    setTransactionDescription("");
    setAmount("");
  };
  const handleClose = () => setOpen(false);
  const { accounts, postApiTransaction, setCambio, cambio } = useAdmin();

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const transaccion = {
      transaction_name: transactionName,
      transaction_description: transactionDescription,
      amount: parseFloat(amount),
      type_transation: transactionType,
      account_id: accountModal,
    };
    postApiTransaction(transaccion);
    setOpen(false);
    setTransactionName("");
    setTransactionDescription("");
    setAmount("");

    setCambio(!cambio);
  };

  return (
    <div>
      <button className="open-modal" onClick={handleOpen}>
        Agregar
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handlerSubmit} className="formulario">
          <div>
            <label>Nombre de la Transaccion</label>
            <input
              type={"text"}
              value={transactionName}
              onChange={(e) => setTransactionName(e.target.value)}
            />
          </div>

          <div>
            <label>Descripcion de la Transaccion</label>
            <textarea
              maxLength={50}
              cols={40}
              rows={5}
              value={transactionDescription}
              onChange={(e) => setTransactionDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Monto</label>
            <input
              type={"text"}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label>Tipo de Transaccion</label>
            <select
              onChange={(e) => setTransactionType(e.target.value)}
              value={transactionType}
              className="select-Modal"
            >
              <option defaultValue={""} selected>
                Tipo de transaccion
              </option>
              <option value={"bill"}>Gasto</option>
              <option value={"income"}>Ingreso</option>
            </select>
          </div>
          <div>
            <label>Cuenta</label>
            <select
              onChange={(e) => setAccountModal(e.target.value)}
              value={accountModal}
              className="select-Modal"
            >
              <option defaultValue={""} selected>
                Cuentas
              </option>
              {accounts ? (
                accounts.map((acc: AccountsInteface) => (
                  <option key={acc.id} value={acc.id}>
                    {acc.bank}
                  </option>
                ))
              ) : (
                <option>No hay Cuentas</option>
              )}
            </select>
          </div>
          <button type="submit"> Agregar</button>
        </form>
      </Modal>
    </div>
  );
}
