import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import { AlertaInterface } from "../../Interfase/alerta";
import { LoginUser } from "../../Interfase/User";

import "./index.scss";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alerta, setAlerta] = useState<AlertaInterface>();
  const { cargando, setCargando, setAuth } = useAuth();

  const navigate = useNavigate();

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los Campos son Obligatorios",
        error: true,
      });
      return;
    }

    const userLogin: LoginUser = {
      email,
      password,
    };
    try {
      setCargando(true);
      const { token, user } = await login(userLogin);
      console.log(user);
      localStorage.setItem("Authorization", token);
      setAuth(user);
      navigate("/admin");
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-login">
      <form onSubmit={handlerSubmit} className="formulario-login">
        {alerta?.error && <p>{alerta.msg}</p>}

        <label>Email</label>
        <input
          type={"text"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password</label>
        <input
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
