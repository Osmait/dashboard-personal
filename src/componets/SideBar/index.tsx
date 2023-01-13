import {
  
  faFileInvoiceDollar,
  faHome,
 
  faMoneyCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink className={({ isActive }) =>
            [
              "link_nav",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }
          end // <-- prevents matching on sub-routes, similar to exact
          to="/admin"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4de" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
          [
            "link_nav about-link",
            isActive ? "active about-link" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
        end
          
          to={"detalle"}
        >
          <FontAwesomeIcon icon={faFileInvoiceDollar} color="#4d4d4de" />
        </NavLink>

        <NavLink
         className={({ isActive }) =>
         [
           "link_nav cuentas",
           isActive ? "active cuentas" : null,
         ]
           .filter(Boolean)
           .join(" ")
       }
       end
          
          to={"cuentas"}
        >
          <FontAwesomeIcon icon={faMoneyCheck} color="#4d4d4de" />
        </NavLink>
      </nav>
    </div>
  );
};
