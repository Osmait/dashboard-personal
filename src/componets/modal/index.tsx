import * as React from "react";

import Modal from "@mui/material/Modal";
import "./index.scss";

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <form className="formulario">
          <div>
            <label>Nombre del Ingreso</label>
            <input />
          </div>
          <div>
            <label>Descripcion del Ingreso</label>
            <input />
          </div>

          <div>
            <label>Descripcion del Ingreso</label>
            <textarea cols={40} rows={5} />
          </div>
          <div>
            <label>Monto</label>
            <input />
          </div>
          <button type="submit"> Agregar</button>
        </form>
      </Modal>
    </div>
  );
}
