import {
  faBank,
  faEnvelope,
  faFileInvoiceDollar,
  faHome,
  faMoneyBills,
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to={"/admin"}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4de" />
        </NavLink>
        <NavLink
          exact={"true"}
          activeclassname="active"
          className={"about-link"}
          to={"detalle"}
        >
          <FontAwesomeIcon icon={faFileInvoiceDollar} color="#4d4d4de" />
        </NavLink>

        <NavLink
          exact={"true"}
          activeclassname="active"
          className={"cuentas"}
          to={"cuentas"}
        >
          <FontAwesomeIcon icon={faMoneyCheck} color="#4d4d4de" />
        </NavLink>
      </nav>
    </div>
  );
};
