import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ListData } from "./componets/ListData/Index";
import { Home } from "./componets/Home";
import { Layout } from "./componets/Layout";
import { Account } from "./componets/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detalle" element={<ListData />} />
          <Route path="cuentas" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
