

import { useState } from "react";
import { AlertaInterface } from "../../Interfase/alerta";
import{ User } from "../../Interfase/User"
import {CreateUser } from "../../api/user"

import "./index.scss";
import { useNavigate } from "react-router-dom";
export const Registro = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repiPassword, setRepiPassword] = useState<string>("");

    const [alerta, setAlerta] = useState<AlertaInterface>();
    const [name, setName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
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
    
        const userRegistro:User = {
        name,
        last_name:lastName,
        email,
        password,
        };
        try {
           await CreateUser(userRegistro)
           navigate("/");
         
        } catch (error) {
          console.log(error);
        }
      };



  return (
    <div className="container-login">
    
    <form className="formulario-login" onSubmit={handlerSubmit}>
        <label>Nombre</label>
        <input
         type={"text"}
         onChange={(e) => setName(e.target.value)}
         value={name}
        />

        <label>Apellidos</label>
        <input
         type={"text"}
         onChange={(e) => setLastName(e.target.value)}
         value={lastName}
        />

        <label>Email</label>
        <input
         type={"text"}
         onChange={(e) => setEmail(e.target.value)}
         value={email}
        />

        <label>Contraseña</label>
        <input
         type={"text"}
         onChange={(e) => setPassword(e.target.value)}
         value={password}
        />

        <label>Repetir Contraseña</label>
        <input
         type={"text"}
         onChange={(e) => setRepiPassword(e.target.value)}
         value={repiPassword}
        />

       
        <button type="submit">Registrar</button>

      


    </form>
    
    
    </div>
  )
}
