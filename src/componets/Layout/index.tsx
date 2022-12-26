import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import { Cargando } from "../Cargando";
import { SideBar } from "../SideBar";
import "./index.scss";

export const Layout = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return <Cargando />;
  return (
    <>
      {auth ? (
        <div className="App">
          <SideBar />
          <div className="page">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};
