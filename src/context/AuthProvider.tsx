import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { authInterface } from "../Interfase/User";

type Props = {
  children: JSX.Element;
};

const AuthContext = createContext<any>(undefined);
export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<authInterface>();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const perfil = async () => {
      try {
        const token = localStorage.getItem("Authorization");

        if (!token) {
          setCargando(false);
          return;
        }
        const config = {
          headers: {
            "content-Type": "application/json",
            Authorization: token,
          },
        };

        const URL = `${import.meta.env.VITE_URL_API}perfil`;
        const { data } = await axios(URL, config);

        setAuth(data);

        setCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    perfil();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        cargando,
        setAuth,
        setCargando,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
