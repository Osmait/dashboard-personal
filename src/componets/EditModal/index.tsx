import Modal from "@mui/material/Modal";
import "./index.scss";
import useAdmin from "../../hooks/useAdmin";
import { AccountsInteface } from "../../Interfase/Accounts";

export default function EditModal() {
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
    editopen,
    setEditopen,
    accounts,
    id,
    setCambio,
    cambio,
    updateApiTransaction,
  } = useAdmin();

  //   const handleOpen = () => setEditopen(true);
  const handleClose = () => setEditopen(false);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      transaction_name: transactionName,
      transaction_description: transactionDescription,
      amount,
      type_transation: transactionType,
      account_id: accountModal,
    };
    updateApiTransaction(newTransaction, id);

    setEditopen(false);
    setTransactionName("");
    setTransactionDescription("");
    setAmount(0);

    setCambio(!cambio);
  };

  return (
    <div>
      <Modal
        open={editopen}
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
              <option defaultValue={"type"} selected disabled hidden>
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
              <option defaultValue={"cuenta"} selected disabled hidden>
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
          <button type="submit"> Guardar Cambios</button>
        </form>
      </Modal>
    </div>
  );
}
