import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ListData } from "./componets/ListData/Index";
import { Home } from "./componets/Home";
import { Layout } from "./componets/Layout";
import { Account } from "./componets/Account";
import { Login } from "./componets/Login/Index";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
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
    </AuthProvider>
  );
}

export default App;
