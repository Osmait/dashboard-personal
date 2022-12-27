import { useContext } from "react";
import AdminContext from "../context/AdminProvider";

const useAdmin = () => useContext(AdminContext);

export default useAdmin;
