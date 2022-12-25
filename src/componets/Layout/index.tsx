import { Outlet } from "react-router-dom";
import { SideBar } from "../SideBar";
import "./index.scss";

export const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};
