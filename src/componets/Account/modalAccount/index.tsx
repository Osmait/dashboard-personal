import Modal from "@mui/material/Modal";
import "./index.scss";

import { useState } from "react";
import useAdmin from "../../../hooks/useAdmin";

export default function AccountModal() {
  const [open, setOpen] = useState(false);
  const [nameAccount, setNameAccount] = useState<string>();
  const [bank, setBank] = useState<string>();
  const [balance, setBalance] = useState<number>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { postApiAccount } = useAdmin();

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: nameAccount,
      bank,
      balance,
    };
    postApiAccount(data);
    setNameAccount("");
    setBank("");
    setBalance(0);
    setOpen(false);
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
            <label>Nombre la Cuenta</label>
            <input
              type={"text"}
              value={nameAccount}
              onChange={(e) => setNameAccount(e.target.value)}
            />
          </div>

          <div>
            <label>Banco</label>
            <input value={bank} onChange={(e) => setBank(e.target.value)} />
          </div>
          <div>
            <label>Balance Actual</label>
            <input
              type={"number"}
              value={balance}
              onChange={(e) => setBalance(parseInt(e.target.value))}
            />
          </div>

          <button type="submit"> Agregar</button>
        </form>
      </Modal>
    </div>
  );
}
