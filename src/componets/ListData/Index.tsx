import {
  faFileInvoiceDollar,
  faMoneyBillTransfer,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BasicModal from "../modal";

import "./index.scss";

export const ListData = () => {
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
            <select className="select-cuenta">
              <option>General</option>
              <option>prueba1</option>
              <option>prueba2</option>
              <option>prueba3</option>
              <option>prueba4</option>
              <option>prueba5</option>
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
          <div className="cuenta-transaccion">
            <FontAwesomeIcon
              icon={faSackDollar}
              size={"5x"}
              color={"#0abf53"}
            />
            <h1>Sueldo</h1>
            <p className="transaccion-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus laborum iste, eius quisquam qui quod beatae totam
              alias ducimus rerum voluptas unde, ipsum blanditiis exercitationem
              aut? Doloremque, est? Praesentium, inventore?
            </p>
            <p>
              <span>$5000</span>
            </p>
            <p>23/12/2022</p>
          </div>
          <div className="cuenta-transaccion">
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              size="5x"
              color={"#ff0b00"}
            />

            <h1>Sueldo</h1>
            <p className="transaccion-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus laborum iste, eius quisquam qui quod beatae totam
              alias ducimus rerum voluptas unde, ipsum blanditiis exercitationem
              aut? Doloremque, est? Praesentium, inventore?
            </p>
            <p>
              <span>$5000</span>
            </p>
            <p>23/12/2022</p>
          </div>
          <div className="cuenta-transaccion">
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              size="5x"
              color={"#ff0b00"}
            />
            <h1>Sueldo</h1>
            <p className="transaccion-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus laborum iste, eius quisquam qui quod beatae totam
              alias ducimus rerum voluptas unde, ipsum blanditiis exercitationem
              aut? Doloremque, est? Praesentium, inventore?
            </p>
            <p>
              <span>$5000</span>
            </p>
            <p>23/12/2022</p>
          </div>
          <div className="cuenta-transaccion">
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              size="5x"
              color={"#ff0b00"}
            />
            <h1>Sueldo</h1>
            <p className="transaccion-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus laborum iste, eius quisquam qui quod beatae totam
              alias ducimus rerum voluptas unde, ipsum blanditiis exercitationem
              aut? Doloremque, est? Praesentium, inventore?
            </p>
            <p>
              <span>$5000</span>
            </p>
            <p>23/12/2022</p>
          </div>
          <div className="cuenta-transaccion">
            <FontAwesomeIcon
              icon={faSackDollar}
              size={"5x"}
              color={"#0abf53"}
            />
            <h1>Sueldo</h1>
            <p className="transaccion-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus laborum iste, eius quisquam qui quod beatae totam
              alias ducimus rerum voluptas unde, ipsum blanditiis exercitationem
              aut? Doloremque, est? Praesentium, inventore?
            </p>
            <p>
              <span>$5000</span>
            </p>
            <p>23/12/2022</p>
          </div>
          <div className="cuenta-transaccion">
            <FontAwesomeIcon
              icon={faSackDollar}
              size={"5x"}
              color={"#0abf53"}
            />
            <h1>Sueldo</h1>
            <p className="transaccion-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus laborum iste, eius quisquam qui quod beatae totam
              alias ducimus rerum voluptas unde, ipsum blanditiis exercitationem
              aut? Doloremque, est? Praesentium, inventore?
            </p>
            <p>
              <span>$5000</span>
            </p>
            <p>23/12/2022</p>
          </div>
        </div>
      </div>
    </>
  );
};
