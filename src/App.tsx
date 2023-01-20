import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ListData } from "./componets/ListData/Index";
import { Home } from "./componets/Home";
import { Layout } from "./componets/Layout";
import { Account } from "./componets/Account";
import { Login } from "./componets/Login/Index";
import { AuthProvider } from "./context/AuthProvider";
import { AdminProvider } from "./context/AdminProvider";
import { Registro } from "./componets/registro";

function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/confirmar"/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/" element={<Login />} />
          </Routes>

          <Routes>
            <Route path="admin" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="detalle" element={<ListData />} />
              <Route path="cuentas" element={<Account />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </AuthProvider>
  );
}

export default App;
